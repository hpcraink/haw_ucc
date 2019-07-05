#!/bin/sh

MD="$HOME/WORK/BWHPC/SRC/haw_ucc"

cd $MD/app_angular

npm run update
npm run rsync

cd ../app_uni

npm run update all

