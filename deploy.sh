#!/bin/sh
BACKUP_PATH="../front-backup"
TODAY=`date +"%Y-%m-%d %H:%M:%S"`

RELATIVE_DIR=`dirname $0`

cd $RELATIVE_DIR

git pull

npm install || exit

#최소실행 백업폴더 생성
[ -d $BACKUP_PATH ] || mkdir $BACKUP_PATH
#최소실행 build
[ ! -d ".next" ] && npm run build:staging

if [ $MODE == 'prod' ]; then
  BUILD_DIR=temp npm run build:prod || echo '\033[31mFAILED - build \033'
elif [ $MODE == 'staging' ]; then
  BUILD_DIR=temp npm run build:staging || echo '\033[31mFAILED - build \033'
else  
  echo "${RED}FAILED - build";
  exit 1
fi
echo "${BLUE}build completed. ${NC}"

if [ ! -d "temp" ]; then
  echo "${RED}FAILED - Temp directory does not exist"
  exit 1
fi

mv .next ../front-backup/"$TODAY" || { echo "${RED} FAILED -  move file"; exit 1; }

mv temp .next

pm2 reload all --update-env

echo ""
echo "${RIGHT_GREEN}#################################################################"
echo "${RIGHT_GREEN}#                      DEPLOY SUCCESSFULLY                      #"
echo "${RIGHT_GREEN}#################################################################${NC}"
echo ""