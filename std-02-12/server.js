const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    if (request.method === "GET") {
        if (request.url === "/") {
            response.writeHead(200, "content-type", "text/html");
            const mainPage = fs.readFileSync("index.html");
            response.write(mainPage);
            response.end();
        }
    }
    if (request.method === "POST") {
        if (request.url === "/") {
        }
    }
});

server.listen(3001, () => {
    console.log("3001 실행 http://localhost:3001");
});
