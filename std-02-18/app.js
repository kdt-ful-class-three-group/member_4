const http = require("http");
const fs = require("fs");
const path = require("path");
const pathbasename = path.basename();
const server = http.createServer(function (request, response) {
    if (request.method === "GET") {
        if (request.url === "/") {
            console.log(pathbasename);
            const mainpage = fs.readFileSync("index.html", "utf8");
            response.writeHead(200, { "content-type": "text/html" });
            response.end;
        }
    }
    if (request.method === "POST") {
    }
});

server.listen(3000, () => {
    console.log("3000번 서버 실행 http://localhost:3000");
});
