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
            // request.on("data", function (data) {
            //     console.log(data);
            // });

            const mainpage = fs.readFileSync("index.html", "utf8");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainpage);
        }
    }
    if (request.method === "POST") {
        if (request.url === "/") {
            // console.log(pathbasename);
            // console.log(request.url.endsWith(""));
            request.on("data", function (data) {
                fs.writeFileSync("star.txt", data.toString());
                console.log(data);
            });
            const mainpage = fs.readFileSync("about.html", "utf8");
            response.writeHead(200, { "content-type": "text/html" });
            response.write(mainpage);
            response.end();
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
    }
});

server.listen(3000, () => {
    console.log("3000번 서버 실행 http://localhost:3000");
});
