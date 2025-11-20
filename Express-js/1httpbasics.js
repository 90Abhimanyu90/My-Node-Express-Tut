// this is the same file as 24httpbasics with some added features (Homepage) in Node js folder but it needs to be here too.

const http = require("http");
const {readFileSync} = require("fs");
const { log } = require("console");

// get all files
const Homepage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    // home page
    res.writeHead(200, { "content-type": "text/html" });
    res.write(Homepage);
    res.end();
  } else if (url === "/contact") {
    // contact page
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h2>Contact page</h2>`);
    res.end();
  } else {
    // another page
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h2>404 Not Found </h2>`);
    res.end();
  }
});

server.listen(5000, () => {
  log("Server is listening on port : 5000");
});
