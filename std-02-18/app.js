const http = require("http");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const { json } = require("stream/consumers");
// const js = require();
let arr = [];
const server = http.createServer(function (request, response) {
    if (request.method === "GET") {
        console.log(request.url);
        if (request.url === "/") {
            // console.log(request.url);
            const mainpage = fs.readFileSync("index.html", "utf8");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainpage);
            // } else if (request.url === "/about.html") {
            //     const mainpage = fs.readFileSync("about.html", "utf8");
            //     response.writeHead(200, { "content-type": "text/html" });
            //     response.end(mainpage);
        }
    }
    if (request.method === "POST") {
        if (request.url === "/") {
            let body = "";
            request.on("data", function (data) {
                body += data;
            });
            request.on("end", function () {
                // const formData = qs.parse(body);

                // console.log(formData);
                // console.log(body);
                // console.log(arr);
                const dataStr = body.toString();
                const formdataStr = JSON.stringify(dataStr);
                const formData = JSON.parse(formdataStr);
                arr.push(formData);
                console.log(arr);
                fs.appendFile("data.json", JSON.stringify(arr), () => {
                    console.log("성공");
                });
            });
            console.log(request.url);
            fs.readFile("index.html", "utf8", (mainpage) => {
                response.writeHead(200, { "content-type": "text/html" });
                response.end(mainpage);
            });
        }
    }
});

server.listen(3000, () => {
    console.log("3000번 서버 실행 http://localhost:3000");
});
