#!/usr/bin/env bash

appFolder="../app_angular/src/app/users"
dataFolder="./ngData/users"

generate () {
  year=${1}
  outputFolder="${dataFolder}/${year}"
  echo "--- generating components for ${year} in ${outputFolder}..."
  [[ ! -d ${outputFolder} ]] && mkdir -p ${outputFolder}
  dataFolder="./ngData/_data"
  [[ ! -d ${dataFolder} ]] && mkdir -p ${dataFolder}
  [[ ! -f ${dataFolder}/${year}.json ]] && ./gather_users_data.sh -j ${year}
  python3 users_components.py -y ${year}
}

check_options () {
  runFunction=${1}
  startYear=${2}
  endYear=${3}
  if [[ ${startYear} -gt `date +%Y` ]]; then
    echo "ERROR: ${startYear} haven't come yet, it's still `date +%Y`"
  elif [[ -z ${endYear} ]] || [[ ${endYear} -gt ${startYear} ]]; then
    [[ -z ${endYear} ]] && endYear=${startYear}
    while [[ ${startYear} -le ${endYear} ]]; do
      echo "---Creating components for: ${startYear}..."
      ${runFunction} ${startYear}
      echo "---Done!"
      startYear=$(( ${startYear} + 1 ))
    done
  else
    echo "ERROR: ${endYear} should be greater than ${startYear}!"
  fi
}

move_files () {
  year=${1}
  echo "--- moving files from ${dataFolder} to ${appFolder}..."
  mv ${dataFolder}/${year}/* ${appFolder}/${year}
}

help_menu () {
  cat << EOF
  Usage: ${0} OPTIONS [START_YEAR] [END_YEAR]

  YEAR               Year to process
  START_MONTH        From what month to start generating components
  END_MONTH          To what month to continue generating, if omitted run only for FROM_MONTH

  OPTIONS:
    -h | --help         Show this message
    -c | --create       Create users components
    -m | --move         Move files to angular application folder

  EXAMPLES:
    Create components for 2019
        $ ${0} -c 2019

    Create components starting from 2017 up to 2018
        $ ${0} --create 2017 2018

    Move 2017 components to angular application folder: ${appFolder}
        $ ${0} --move 2017
EOF
}

case "${1}" in
  -h | --help)
    help_menu
  ;;
  -c | --create)
    check_options generate ${2} ${3}
  ;;
  -m | --move)
    check_options move_files ${2} ${3}
  ;;
  *)
    echo "Wrong options, try ${0} --help"
  ;;
esac
