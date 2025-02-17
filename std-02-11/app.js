const http = require("http");
const fs = require("fs");

const jsonFile = fs.readFileSync("data.json", "utf8");
const jsonData = JSON.parse(jsonFile);

const server = http.createServer(function (request, response) {
    // console.clear();
    // console.log("요청 들어오는것 검사" + request);
    // console.log("요청 주소 검사" + request.url);
    // console.log("요청 방식 검사" + request.method);
    if (request.method === "GET") {
        response.writeHead(200, { "content-type": "text/html" });
        const indexPage = fs.readFileSync("./public/index.html", "utf-8");
        response.write(indexPage);
        response.end();
    }
    if (request.method === "POST") {
        if (request.url === "/") {
            request.on("data", function (data) {
                // console.log(data.toString());
                fs.writeFileSync("star.txt", data.toString());
                console.log(data);
            });
        }

        request.on("end", function (data) {
            const resultString = fs.readFileSync("star.txt", "utf-8");
            jsonData.dataSet.forEach((element) => {
                console.log(element);
            });

            const resultSt = resultString.toString();
            // console.log();
            response.end(splitString(resultSt));
        });
        response.statusCode = 200;
        // response.end();
    }
});

server.listen(3000, () => {
    console.clear();
    console.log("3000번 서버 실행 http://localhost:3000");
});

function splitString(string) {
    let result = [];
    let first = string.split("&");
    first.forEach((data) => {
        let value = data.split("=")[1];
        result.push(value);
    });
    return `
      <html>
        <head>
          <title> ${result[0]}</title>
        </head>
        <body>
          <h1>name : ${result[0]}</h1>
          <h1>message : ${result[1]}</h1>
        </body>
      </html>
    `;
}
