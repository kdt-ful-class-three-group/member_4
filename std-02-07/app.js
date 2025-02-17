const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
    if (request.url === "/") {
        if (request.method === "GET") {
            const mainPage = fs.readFileSync("./index.html");
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.end(mainPage);
        }
        if (request.method === "/test") {
            if (request.method === "POST") {
            }
        }
    }
});

server.listen(3000);
