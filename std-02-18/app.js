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
        if (request.url === "/about") {
            let body = "";
            request.on("data", function (data) {
                body += data;
            });
            request.on("end", function () {
                // const formData = qs.parse(body);

                // console.log(formData);
                // console.log(body);
                // console.log(arr);
                // const dataStr = body.toString();
                const qsdata = qs.parse(body); // form data를 객체로 반환해준다.
                const formdataStr = JSON.stringify(qsdata); // form data JSON 문자열로 변경해준다.
                const formData = JSON.parse(formdataStr); // orm data JSON 문자열을 json형식으로 변경한다.
                arr.push(formData); // 배열로 만들어서
                console.log(formdataStr);
                fs.writeFile("data.json", JSON.stringify(arr, 2), () => {
                    // json 파일에 보내준다.
                    console.log("성공");
                });
            });
            console.log(request.url);
            fs.readFile("about.html", "utf8", (mainpage) => {
                response.writeHead(200, { "content-type": "text/html" });
                response.end(mainpage);
            });
        }
    }
});

server.listen(3000, () => {
    console.log("3000번 서버 실행 http://localhost:3000");
});
