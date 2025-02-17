const http = require("http");
// const fs = require("fs");
function makePage(h1Text) {
    const page = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8>
</head>
  <body>
    <h1>${h1Text}</h1>
  </body>
</html>`;
    return page;
}

const server = http.createServer(function (request, response) {
    console.log(request.method);
    console.log(request.url);
    if (request.method === "GET") {
        if (request.url === "/") {
            response.statusCode = 200;
            response.setHeader("content-type", "utf-8; text/html");
            response.end(makePage("공미남"));
        } else {
            function responseUrl(url) {
                response.statusCode = 200;
                response.setHeader("content-type", "utf-8; text/html");
                response.end(makePage(url));
            }
            responseUrl(request.url);
        }
    }
});

server.listen(3000, function () {
    console.log("3000, 서버실행");
});
