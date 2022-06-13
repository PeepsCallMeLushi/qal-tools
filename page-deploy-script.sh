#!/bin/bash

echo "Starting the script"
ng build --aot --base-href ./
cd docs
cp index.html 404.html
echo "mtg.peepscallmelushi.com" > CNAME
echo "Script over"
