#!/bin/sh

# read -p "MODE : " var1
# echo "input  $var1"

# FILES=$(stat -l -t "%F %T %z" * | tail -1)

# dir=$(dirname $0)
# echo dirname은 $dir

echo '$0은' $0

RELATIVE_DIR=`dirname "$0"`
echo 'Dir:' $RELATIVE_DIR

cd $RELATIVE_DIR


SHELL_PATH=`pwd -P`
echo $SHELL_PATH

# cd $RELATIVE_DIR
# SHELL_PATH=`pwd -P`
