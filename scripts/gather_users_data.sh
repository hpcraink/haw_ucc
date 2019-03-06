#!/usr/bin/env bash

dataFolder="./ngData/_data"

declare -i processedYear=2017
[[ ! -z ${2} ]] && declare -i processedYear=${2}

json () {
  year=${1}
  month=${2}
  echo "--- generating: json files ---"
  python3 user_data.py -y ${year} -m ${month} -j
}

ts () {
  year=${1}
  month=${2}
  echo "--- generating: ts files ---"
  python3 user_data.py -y ${year} -m ${month} -t
}

generate_all () {
  runFunction=${1}
  while [[ ${processedYear} -le `date +%Y` ]]; do
    declare -i month=1
    while [[ ${month} -le 12 ]];do
      ${runFunction} ${processedYear} ${month}
      month=$(( month + 1))
    done
    ${runFunction} ${processedYear} -1
    processedYear=$(( ${processedYear} + 1 ))
  done
}

check_options () {
  runFunction=${1}
  if [[ -z ${fromMonth} ]]; then
    ${runFunction} ${year} -1
  elif [[ ${fromMonth} -ge 1 && ${fromMonth} -le 12 ]]; then
    if [[ -z ${upToMonth} ]]; then
      ${runFunction} ${year} ${fromMonth}
    else
      while [[ ${fromMonth} -le ${upToMonth} ]]; do
        if [[ ${fromMonth} -ge 13 ]]; then
          echo "There are 12 months in a year!"
          break
        else
          ${runFunction} ${year} ${fromMonth}
          fromMonth=$(( ${fromMonth} + 1 ))
        fi
      done
    fi
  else
    echo "Wrong specified month, for more info try: ${0} --help"
  fi
}

appFolder="../app_angular/src/app/_data"
move_files () {
  [[ ! -d ${appFolder} ]] && mkdir -p ${appFolder}
  mv ${dataFolder}/* ${appFolder} -v && rm -rf ${dataFolder}
}

help_menu () {
  cat << EOF
  Gather "TotalCost" data, sort it per users and save it to '.ts' or '.json' files.

  Usage: ${0} [OPTION ][STRT_YEAR]

  START_YEAR         From what year to process, if omitted set to 2017

  OPTIONS:
    -h | --help         Show this message
    -m | --move         Move files to angular application folder
    -t | --ts           Generate .ts files from 2017 up to `date +%Y`
    -j | --json         Generate .json files from 2017 up to `date +%Y`

  EXAMPLES:
    Gather data from 2018 to current year, and save it to '.ts' files.
        $ ${0} -t 2018

    Move created components to angular application folder: ${appFolder}
        $ ${0} --move
EOF
}

case "${1}" in
  -h | --help)
    help_menu
  ;;
  -m | --move)
    move_files
  ;;
  -j | --json)
    generate_all json
  ;;
  -t | --ts)
    [[ -d ${dataFolder} ]] && rm -rf ${dataFolder}
    generate_all ts
  ;;
  *)
    echo "Wrong operator, for more info try: ${0} --help"
  ;;
esac
