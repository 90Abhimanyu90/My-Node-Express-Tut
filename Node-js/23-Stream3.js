const { log, error } = require("console");
const fs = require("fs");
const http = require("http");
const { pipeline } = require("stream");

// const server = http.createServer((req,res)=>{
//     const data = fs.readFileSync('./content/subcontent/bigtext.txt','utf-8');
//     // res.write('hello');
//     res.end(data);
//     // res.end();
// });

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream("./content/subcontent/bigtext.txt","utf-8");
  fileStream.on("open", (result) => {
    // writes in chunks pipe()
    fileStream.pipe(res);
  });
  fileStream.on("error", (error) => {
    res.end(error);
  });
});

server.listen(5000, () => {
  log("Server is listening on port: 5000");
});
