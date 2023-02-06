#!/bin/bash

set -e

source ~/.nvm/nvm.sh

nvm use 14.15.3

npm run clean

# build bundled server first
cd src/

npx webpack

cd ../

# make and zip file containing the server.js and 
# the public folder of web assets
# and copy to build/
node -r esm ./scripts/webzip.js

# bundle a node inside (hopefully a temporary fix)
# cp ~/.nvm/versions/node/v12.10.0/bin/node build/

cp src/config.cjs build/

npm run build

chmod +x build/grader.cjs

#cp -r build ~/

# rename to app name
source name.txt

cd bin/

mv grader.exe $grader_app_name.exe || :
mv grader.nix $grader_app_name.nix || :
mv grader.mac $grader_app_name.mac || :
mv grader.nix32 $grader_app_name.nix32 || :
mv grader.win32.exe $grader_app_name.win32.exe || :

cd ../

cp -r bin ~/

serve -p 8080 ~/bin
