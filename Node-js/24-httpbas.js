const http = require("http");
const { log } = require("console");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    // home page
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h2>home page</h2>`);
    res.end();
  } else if (url === "/contact") {
    // contact page
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h2>Contact page</h2>`);
    res.end();
  } else {
    // anyother page
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h2>404 Not Found </h2>`);
    res.end();
  }
});

server.listen(5000, () => {
  log("Server is listening on port : 5000");
});
