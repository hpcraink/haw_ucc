#!/usr/bin/env bash

possible_prefixes='aa as es hf hk hn hr hs ht hu ro'
prefixes='aa hu'

build () {
  [[ ! -d src ]] && npm run make
  [[ ! -d node_modules ]] && npm install && npm audit fix
}

create () {
  prefix=${1}
  [[ -z ${prefix} ]] && echo "No uni prefix specified" && exit 0
  echo "Prefix: ${prefix}"
}

help_menu () {
  cat << EOF
  Usage ${0} [OPTIONS] [UNI PREFIX]

  OPTIONS:
    -h | --help       Show this message
    -b | --build      Build new case

  EXAMPLES:
    Create components for es:
      $ ${0} es

    Create components for all unis in '${prefixes}':
      $ ${0} all

    Build a new fresh case:
      $ ${0} -b

EOF
}

case ${1} in
  -h | --help)
    help_menu
  ;;
  -b | --build)
    build
  ;;
  all)
    for prefix in ${prefixes}; do
      create ${prefix}
    done
  ;;
  *)
    for prefix in ${possible_prefixes}; do
      [[ ${1} == ${prefix} ]] && create ${1} && exit 1
    done
    echo "Wrong option. For more info try ${0} --help"
  ;;
esac
