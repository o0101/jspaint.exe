#!/usr/bin/env bash

./node_modules/.bin/esbuild src/app.js --bundle --outfile=src/build/service.cjs --platform=node --minify --analyze
./node_modules/.bin/esbuild src/launcher.js --bundle --outfile=build/grader.cjs --platform=node --minify --analyze
