const http = require("http");
const fs = require("fs");
const qs = require("querystring");
let arr = {}
const server = http.createServer(function (request, response) {
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
            request.on("data", function (data) {
                fs.writeFileSync("star.txt", data.toString());
            });
        }

        request.on("end", function () {
            const resultString = fs.readFileSync("star.txt", "utf-8");
            const resultSt = resultString.toString();
            let qsData = qs.parse(resultSt);
            let jsonTest = JSON.stringify(qsData);
            fs.writeFileSync("star1.json", jsonTest);
            console.log(qsData);
            response.end(resultSt);
        });
        response.statusCode = 200;
        // response.end();
    }
});
server.listen(3000, () => {
    console.log("3000 서버 실행 http://localhost:3000");
});
