#!/usr/bin/env bash

prefixes='aa hu'

update () {
  npm run make &&
  npm install &&
  for prefix in ${prefixes}; do
    npm run compile:${prefix} &&
    npm run sync:${prefix} &&
    npm run save:${prefix}
  done &&
  npm run clean:all
}

update
