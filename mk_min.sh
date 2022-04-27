#!/bin/bash

# welcome
echo ""
echo "  xpn packer"
echo " ----------------"
echo ""
echo "  Requirements:"
echo "  * terser, colors, yargs, readline-sync"
npm install terser jshint colors yargs readline-sync
echo ""
if [ $# -gt 0 ]; then
     set -x
fi


# skeleton
echo "  Packing:"
echo "  * min.xpn_web.js..."
cat components/xpn_uielto_navbar.js\
    components/xpn_uielto_highlights.js\
    components/xpn_uielto_user_guide_menu.js\
    components/xpn_uielto_faq.js\
    components/xpn_uielto_publication.js\
    components/xpn_uielto_about.js\
    components/xpn_uielto_author.js\
    \
    js/xpn_ga.js \
    \
    js/app.js > js/xpn_web.js
terser -o js/min.xpn_web.js js/xpn_web.js
rm -fr js/xpn_web.js

# the end
echo ""
echo "  xpn packed (if no error was shown)."
echo ""