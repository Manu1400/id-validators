#/bin/bash

#npm install -g chai
#npm install -g mocha
#npm install -g standard

npm list --depth=0 --parseable=true --only=prod | tail -n +2 > listDependency.txt

while read path; do
    cd "$path" &&
    echo "$path" &&
    cmd=$(node -p "if (require('./package.json').name == 'jsvat') { return ''} var scripts = require('./package.json').scripts || {test: ''}; var test = scripts.test; (test == 'mocha --watch' || test.includes('exit') ) ? 'mocha': test") &&
    echo "$cmd" &&
    npm install --production &&    # warning
    rm "package-lock.json" &&
    eval $cmd #npm test

    #testcommand=$(node -p "(require('./package.json').scripts || {test: ''}).test")

    #var nbligne = npm list --depth=0 --parseable=true --only=dev | grep "jest" | wc -l
    #if [ $nbligne = 'mocha --watch' ]
    #then
    #  echo "le teste est passé"
    #fi
done < listDependency.txt
