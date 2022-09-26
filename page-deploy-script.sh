#!/bin/bash

echo "Starting the script"
ng build --aot --base-href ./
cd docs
cp index.html 404.html
echo "Script over"
