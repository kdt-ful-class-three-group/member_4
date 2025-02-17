const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
    if (request.method === "GET") {
        console.log(request.url);
        if (request.url === "/") {
            const MAIN_PAGE = fs.readFileSync("index.html", "utf-8");
            response.statusCode = 200;
            response.setHeader("Content-Type", "utf-8; text/html");
            response.end(MAIN_PAGE);
        } else if (request.url === "/style.css") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/css");
            const style = fs.readFileSync("style.css", "utf-8");
            response.end(style);
        } else if (request.url === "/script.js") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "utf-8; text/javascript");
            const script = fs.readFileSync("script.js", "utf-8");
            response.end(script);
        }
    }
    if (request.method === "POST") {
        console.log(request.url);
        request.on("data", function (data) {
            console.log(data.toString());
        });
        request.on("end", function () {
            console.log("잘받음");
        });
    }
});

server.listen(3000, function () {
    console.log("서버 도는 중 http://localhost:3000");
});
