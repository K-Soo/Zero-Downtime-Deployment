#!/bin/sh
RELATIVE_DIR=`dirname $0`

cd $RELATIVE_DIR

SHELL_PATH=`pwd -P`

cd ${SHELL_PATH%/*}/front-backup

if [ -z "$(ls -A .)" ]; then
  echo "${RED}empty directory \033";
  exit;
fi

FIRST=$(ls -t | head -n 1)
echo $FIRST
rm -rf ../zerotime/.next
mv "$FIRST" .next
mv .next ../zerotime

echo ""
echo "${RIGHT_GREEN}#################################################################"
echo "${RIGHT_GREEN}#                     ROLL-BACK SUCCESSFULLY                    #"
echo "${RIGHT_GREEN}#################################################################${NC}"
echo ""