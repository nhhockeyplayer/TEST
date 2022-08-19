#!/bin/bash
ROOT_DIR=$(pwd)
cd "$ROOT_DIR/dist/libs"

recurseAndDeploy() {
    if [[ -f package.json ]];   # target case, unwind
    then
        npm publish
        return;
    else
        for LIBRARY in */; do
           cd $LIBRARY;
           echo PUBLISHING "$LIBRARY"
           recurseAndDeploy;   # recursion
           cd ..
        done
    fi
}

for DIR in */; do
  recurseAndDeploy;            # recursion
done
cd ..
cd ..
