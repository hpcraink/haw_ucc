#!/usr/bin/env bash

appFolder="../app_angular/src/app/users"
dataFolder="./ngData/users"

generate () {
  uni=${1}
  year=${2}
  outputFolder="${dataFolder}/${year}"
  echo "--- generating components for ${year} in ${outputFolder}..."
  #[[ ! -d ${outputFolder} ]] && mkdir -p ${outputFolder}
  dataFolder="./ngData/_data"
  [[ ! -d ${dataFolder} ]] && mkdir -p ${dataFolder}
  [[ ! -f ${dataFolder}/${year}.json ]] && ./gather_users_data.sh -j ${year}
  python3 users_components.py -u ${uni} -y ${year}
}

check_options () {
  runFunction=${1}
  uni=${2}
  startYear=${3}
  endYear=${4}
  [[ ${uni} -ge 2017 ]] || [[ -z ${uni} ]] && echo "Specify which uni/s to create components for!" && exit 0
  if [[ ${startYear} -gt `date +%Y` ]]; then
    echo "ERROR: ${startYear} haven't come yet, it's still `date +%Y`"
  elif [[ -z ${endYear} ]] || [[ ${endYear} -gt ${startYear} ]]; then
    [[ -z ${endYear} ]] && endYear=${startYear}
    while [[ ${startYear} -le ${endYear} ]]; do
      echo "---Creating components for: ${startYear}..."
      ${runFunction} ${uni} ${startYear}
      echo "---Done!"
      startYear=$(( ${startYear} + 1 ))
    done
  else
    echo "ERROR: ${endYear} should be greater than ${startYear}!"
  fi
}

move_files () {
  uni=${1}
  year=${2}
  if [[ ${uni} == "all" ]]; then
    echo "--- moving files from ${dataFolder} to ${appFolder}..."
    mv ${dataFolder}/${year}/* ${appFolder}/${year}
  else
    echo "--- moving files from ${dataFolder}..."
    destFolder="../app_uni/src/app/users/"
    mv ${dataFolder}/${uni}/* ${destFolder}
  fi
}

help_menu () {
  cat << EOF
  Usage: ${0} OPTIONS [START_YEAR] [END_YEAR]

  OPTIONS:
    -h | --help         Show this message
    -c | --create       Create users components
    -m | --move         Move files to angular application folder

  EXAMPLES:
    Create components for all universities in 2019
        $ ${0} -c all 2019

    Create components for aa in 2019
        $ ${0} -c aa 2019

    Create components starting from 2017 up to 2018
        $ ${0} --create all 2017 2018

    Move 2017 components to angular application folder: ${appFolder}
        $ ${0} --move all 2017
EOF
}

case "${1}" in
  -h | --help)
    help_menu
  ;;
  -c | --create)
    check_options generate ${2} ${3} ${4}
  ;;
  -m | --move)
    check_options move_files ${2} ${3} ${4}
  ;;
  *)
    echo "Wrong options, try ${0} --help"
  ;;
esac
