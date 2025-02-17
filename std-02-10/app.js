const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (request, response) {
    const pathJoin = path.join(__dirname, "public"); // __dirname : 현재의 파일이 위치한 폴더의 절대경로를 알려준다.
    const commomPath = path.join(pathJoin, request.url);
    if (request.method === "GET") {
        //
        if (request.url === "/") {
            // console.log(pathJoin, request.url);
            const mainPage = fs.readFileSync("index.html", "utf-8");
            response.statusCode = 200;
            response.setHeader("content-type", "text/html");
            response.end(mainPage);
        } else if (request.url === "/about") {
            const aboutPage = fs.readFileSync("about.html", "utf-8");
            response.statusCode = 200;
            response.setHeader("content-type", "text/html");
            response.end(aboutPage);
        } else if (request.url === "/testRoute") {
            const testHtml = fs.readFileSync("testRoute.html", "utf-8");
            response.statusCode = 200;
            response.setHeader("content-type", "text/html");
            response.end(testHtml);
            console.log(commomPath);
        } else if (request.url === "/style.css") {
            const style = fs.readFileSync("style.css");
            response.statusCode = 200;
            response.setHeader("contnet-type", "text/css");
            response.end(style);
        } else if (request.url === "/script.js") {
            const script = fs.readFileSync("script.js");
            response.statusCode = 200;
            response.setHeader("contnet-type", "text/javascript");
            response.end(script);
        }
    }
    if (request.method === "POST") {
    }
});

server.listen(3001, function () {
    console.log("서버 응답 받음");
});
