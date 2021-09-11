#!/bin/bash

set -e

npm run clean

# build bundled server first
cd src/

npx webpack

cd ../

./scripts/webzip.js

npx webpack 

chmod +x build/grader.mjs

./build/grader.mjs
