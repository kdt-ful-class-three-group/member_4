const http = require("http");
const fs = require("fs");
const path = require("path");
// const pathbasename = path.basename();
const server = http.createServer(function (request, response) {
    if (request.method === "GET") {
        console.log(request.url);
        if (request.url === "/") {
            // console.log(pathbasename);
            console.log(request.url);
            const mainpage = fs.readFileSync("index.html", "utf8");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainpage);
        }
        if (request.url === "/about?") {
            // console.log(pathbasename);
            console.log(request.url.endsWith(""));
            const mainpage = fs.readFileSync("about.html", "utf8");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainpage);
        }
    }
    if (request.method === "POST") {
    }
});

server.listen(3000, () => {
    console.log("3000번 서버 실행 http://localhost:3000");
});
