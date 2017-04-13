#!/bin/sh

java -jar soy/closure-templates/SoyToJsSrcCompiler.jar --outputPathFormat soy/generated/main.js --srcs soy/main.soy
