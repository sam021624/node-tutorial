const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our homepage.");
  }

  if (req.url === "/about") {
    return res.end("Here is a short history about us");
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>    
    <a href="/">Go back home</a>
    `);
});
server.listen(5000);
