#!/bin/sh

if node -v >/dev/null 2>&1 ; then
	node `dirname $0`/optimizer/r.js $*
else
	java -classpath `dirname $0`/optimizer/js.jar:`dirname $0`/optimizer/compiler.jar org.mozilla.javascript.tools.shell.Main `dirname $0`/optimizer/r.js $*
fi
