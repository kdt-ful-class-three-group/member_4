const http = require("http");

const MAIN_PAGE = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <h1>안녕?</h1>
      <a href=/"about">소개</a>
      <script src="script.js"></script>
    </body>
  </html>
  `;
const server = http.createServer(function (request, response) {
    if (request.method === "GET") {
        console.log(request.url);
        if (request.url === "/") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "utf-8; text/html");
            response.end(MAIN_PAGE);
        } else if (request.url === "/style.css") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/css");
            response.end("h1{ color: red; }");
        } else if (request.url === "/script.js") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "utf-8; text/javascript");
            response.end("console.log('이건 스크립트야 안녕?');");
        }
    }
});

server.listen(3000, function () {
    console.log("서버 도는 중 http://localhost:3000");
});
