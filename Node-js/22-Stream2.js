const fs = require('fs');
const {log} = require('console');
require('stream');

const stream = fs.createReadStream('./content/subcontent/bigtext.txt');

// Event syntax
stream.on('data',(res)=>{
    log(res);
    // log(res.toString()); this works or you can use enoding like in line 13  
})
// don;t get the difference in this and readfile but lets see later
stream.on('error',(err)=>{
    log(err);
})


// const Stream2 = fs.ReadStream('./content/subcontent/bigtext.txt',{encoding : 'utf-8'})
// const Stream2 = fs.ReadStream('./content/subcontent/bigtext.txt',{highWaterMark:9000})  ye high value set kar dega jaha tak jana hai
// Stream2.on('data',(res)=>{
//     log(res);
// })