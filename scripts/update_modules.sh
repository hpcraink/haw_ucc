#!/usr/bin/env bash

declare -i year=2019
declare -i month=1
[[ ! -z ${3} ]] && declare -i month=${3}
[[ ! -z ${2} ]] && declare -i year=${2}

appFolder="../app_angular/src/app/${year}"
dataFolder="./ngData/${year}"

generate () {
  echo "--- generating components for ${year} in ${dataFolder}..."
  python3 update_modules.py -y ${year} -m ${month}
}

check_options () {
  runFunction=${1}
  if [[ ${year} -gt `date +%Y` ]]; then
    echo "ERROR: ${year} haven't come yet, it's still `date +%Y`"
  elif [[ ${month} -gt 12 ]]; then
    echo "ERROR: wrong month spedified: ${month}"
  else
    ${runFunction}
  fi
}

move_files () {
  mv ${dataFolder}/* ${appFolder} && rm ${dataFolder} -rfv
}

help_menu () {
  cat << EOF
  Usage: ${0} OPTIONS [YEAR] [MONTH]

  OPTIONS:
    -h | --help         Show this message
    -c | --create       Create data for ${YEAR}
    -m | --move         Move files to angular application folder

    YEAR                Year to genetrate data for
    MONTH               Up to which month to generate data for starting with 1

  EXAMPLES:
    Create data for 2019, from Jan to May
        $ ${0} -c 2019 5

    Move data from ${dataFolder} to ${appFolder}
        $ ${0} --move
EOF
}

case "${1}" in
  -h | --help)
    help_menu
  ;;
  -c | --create)
    check_options generate
  ;;
  -m | --move)
    check_options move_files
  ;;
  *)
    echo "Wrong options, try ${0} --help"
  ;;
esac
