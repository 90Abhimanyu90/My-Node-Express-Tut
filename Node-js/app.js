const { log } = require("console");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('./content/subcontent/bigtext.txt','utf-8');
    // res.write('hello');
    res.write(data)
    res.end();
});

server.listen(5000);

