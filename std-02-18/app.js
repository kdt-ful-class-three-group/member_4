const http = require("http");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
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
            console.log(request.url);
            const mainpage = fs.readFileSync("index.html", "utf8");
            response.writeHead(200, { "content-type": "text/html" });
            response.end(mainpage);
            request.on("data", function (data) {
                //request 데이터
                fs.writeFileSync("index.html", data);
                console.log(data);
            });
        }
        // if (request.url === "/about") {
        //     const mainpage = fs.readFileSync("about.html", "utf8");
        //     request.on("data", function (data) {
        //         //request 데이터
        //         fs.writeFileSync("about.html", data);
        //         console.log(data);
        //     });
        //     response.writeHead(200, { "content-type": "text/html" });
        //     response.end(mainpage);
        // }
        // request.on("end", function () {
        //     //data가 끝낫을경우 end
        //     const aboutFile = fs.readFileSync("about.html");
        //     response.end(aboutFile);
        // });
    }
});

server.listen(3000, () => {
    console.log("3000번 서버 실행 http://localhost:3000");
});
