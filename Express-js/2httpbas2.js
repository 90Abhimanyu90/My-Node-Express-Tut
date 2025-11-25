const http = require("http");
const { readFileSync } = require("fs");
const { log } = require("console");

// get all files
const Homepage = readFileSync("./Stopwatch/index.html");
const Stylepage = readFileSync("./Stopwatch/style.css");
const Scriptpage = readFileSync("./Stopwatch/script.js");

const server = http.createServer((req, res) => {
  const url = req.url;
    // log(url);
  if (url === "/") {
    // home page
    res.writeHead(200, { "content-type": "text/html" });
    res.write(Homepage);
    res.end();
  } 
  else if (url === "/style.css") {
    // styles page
    res.writeHead(200, { "content-type": "text/css" });
    res.write(Stylepage);
    res.end();
  } 
  else if (url === "/script.js") {
    // Script page
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(Scriptpage);
    res.end();
  } 
  else if (url === "/contact") {
    // contact page
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h2>Contact page</h2>`);
    res.end();
  } 
  else {
    // another page
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h2>404 Not Found </h2>`);
    res.end();
  }
});

server.listen(3000, () => {
  log("Server is listening on port : 3000");
});
