#!/bin/bash

user=$1
description=$2
repo=$(basename `git rev-parse --show-toplevel`)
latest_tag=$(git describe --abbrev=0)
source name.txt
cd bin/
grel release -u $user -r $repo --tag $latest_tag --name "New release" --description '"'"$description"'"'
grel upload -u $user -r $repo --tag $latest_tag --name "$grader_app_name.exe" --file $grader_app_name.exe
grel upload -u $user -r $repo --tag $latest_tag --name "$grader_app_name.macos" --file $grader_app_name.mac
grel upload -u $user -r $repo --tag $latest_tag --name "$grader_app_name.linux" --file $grader_app_name.nix
grel upload -u $user -r $repo --tag $latest_tag --name "$grader_app_name.linx32" --file $grader_app_name.nix32
grel upload -u $user -r $repo --tag $latest_tag --name "$grader_app_name.win32.exe" --file $grader_app_name.win32.exe



