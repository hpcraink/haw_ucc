#!/usr/bin/env bash

MD="$PWD/.."
S_DIR=${MD}/scripts
A_DIR=${MD}/app_angular
YEAR=2019
LOG_FILE=log.update

#### Set either one; MONTH=12 if full year is to be synched & updated
declare -i MONTH=`date +%m`
# MONTH=12
[[ ! -z ${1} ]] && declare -i MONTH=${1}

run_scripts () {
  cd ${S_DIR}
  [[ -f ${LOG_FILE} ]] && rm ${LOG_FILE} &&

  echo "-- Sync database --"
  ./collect_data.sh -s ${YEAR} 2>&1 | tee ${LOG_FILE} &&
  ./collect_data.sh -c ${YEAR} 2>&1 | tee ${LOG_FILE} &&
  echo "-- DONE --"

  echo "-- Gather costs and users data --"
  ./gather_costs.sh ${YEAR} 2>&1 | tee ${LOG_FILE} &&
  ./gather_costs.sh -m 2>&1 | tee ${LOG_FILE} &&
  echo "-- DONE --"

  echo "-- Gather users data in ts files --"
  ./gather_users_data.sh -t ${YEAR} 2>&1 | tee ${LOG_FILE} &&
  ./gather_users_data.sh -m 2>&1 | tee ${LOG_FILE} &&
  echo "-- DONE --"

  echo "-- Create data components for ${YEAR}, ${MONTH} --"
  ./create_data_components.sh ${YEAR} ${MONTH} 2>&1 | tee ${LOG_FILE} &&
  ./create_data_components.sh -m 2>&1 | tee ${LOG_FILE} &&
  ./update_modules.sh -c ${YEAR} ${MONTH} 2>&1 | tee ${LOG_FILE} &&
  ./update_modules.sh -m 2>&1 | tee ${LOG_FILE} &&
  echo "-- DONE --"

  echo "-- Create users components for all unis in ${YEAR} --"
  ./create_users_components.sh -c all ${YEAR} 2>&1 | tee ${LOG_FILE} &&
  cd ${A_DIR} && npm run clean:users:${YEAR} && cd ${S_DIR} &&
  ./create_users_components.sh -m all ${YEAR} 2>&1 | tee ${LOG_FILE} &&
  echo "-- DONE --"

  rm ngData -rf && cd ${MD}
}

help_menu () {
  cat << EOF
  Update app data

  Usage: ${0} [MONTH]

  MONTH              Month to be updated

  OPTIONS:
    -h | --help         Show this message

  EXAMPLES:
    Update May, ${YEAR}
        $ ${0} 5
EOF
}

case "${1}" in
  -h | --help)
    help_menu
  ;;
  *)
    run_scripts
  ;;
esac
