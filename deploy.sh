#!/bin/sh
BACKUP_PATH="../front-backup"
TODAY=`date +"%Y-%m-%d %H:%M:%S"`

RELATIVE_DIR=`dirname $0`

cd $RELATIVE_DIR

git pull

npm install || exit

[ -d $BACKUP_PATH ] || mkdir $BACKUP_PATH

[ ! -d ".next" ] && npm run build:staging

BUILD_DIR=temp npm run build:staging || { echo '\033[31m build failed \033'; exit 1; }
echo '\033[34m build completed. \033'

if [ ! -d "temp" ]; then
  echo '\033[31m temp error.\033'  
  exit 1
fi

mv .next ../front-backup/"$TODAY" || { echo '\033[31m Failed to move file \033'; exit 1; }

mv temp .next

pm2 reload all --update-env

echo '\033[32m **************** deploy success!!! ******************\033'