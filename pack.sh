packfile="github-linker-chrome.zip"
rm $packfile
zip -r $packfile chrome -x "chrome/assert/data.json"
echo "zip file to: $packfile"
ls -alh $packfile
