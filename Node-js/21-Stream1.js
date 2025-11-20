const fs = require('fs');
const {log} = require('console');

for (let i = 0; i < 1000; i++) {
    fs.writeFileSync('./content/subcontent/bigtext.txt',`Hello world ${i}\n`, {flag: 'a'});
}


// ye sample hai bas readsteam ko chalane ke liye