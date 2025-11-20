// const fs = require('fs') another method is down below
const {readFile,writeFile} = require('fs').promises
const {log} = require('console');
const util = require('util');

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// another way =>
const start = async () => {
    try{
        const first = await readFile("./content/subcontent/test2.txt",'utf-8');
        const second = await readFile("./content/subcontent/test3.txt",'utf-8');
        log(first,second);
        await writeFile('./content/subcontent/u-know-what.txt',`This is awesome ${first} ${second}`);
    }
    catch(error){
        log(error);
    };
};


// const start = async () => {
//     try{
//         const first = await readFilePromise("./content/subcontent/test2.txt",'utf-8');
//         const second = await readFilePromise("./content/subcontent/test3.txt",'utf-8');
//         log(first,second);
//         await writeFilePromise('./content/subcontent/i-know-what.txt','This is not somthing i can do on my own');
//     }
//     catch(error){
//         log(error);
//     };
// };


start();