const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.write('Welcome to home page');
        res.end();
    }
    else if (req.url === '/about') {
       res.end('About baby')
    }
    else{
         res.end('Error Page');
    }
})
server.listen(5000,()=>{
    console.log(`Server listening on port : 5000`)
})