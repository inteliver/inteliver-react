#!/bin/bash

# clean old library
rm -rf ./lib
rm -rf ./types

# build typescript
yarn build:package

# copy Image Component
cp -r ./types/* ./lib

# package the lib folder
yarn pack

# To publish to npm
# update version
# build
# npm pulish
