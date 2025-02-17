const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
    console.log(request.method);
    console.log(request.url);
    if (request.method === "GET") {
        if (request.url === "/") {
            const page = `<!DOCTYPE html>
          <html>
            <head>
            <meta charset="utf-8>
            </head>
              <body>
                <h1>안녕</h1>
              </body>
          </html>`;
            response.statusCode = 200;
            response.setHeader("content-type", "utf-8; text/html");
            response.end(page);
        }
        if (request.url === "/abc") {
        }
    }
    if (request.method === "POST") {
    }
});

server.listen(3000, function () {
    console.log("3000, 서버실행");
});
