#!/bin/sh

ssh -t -t root@$1 <<EOF
cd $2
git pull origin $3
npm i
npm run build
exit
EOF