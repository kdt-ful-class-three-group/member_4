import express from "express";
import methodOverride from "method-override";
import fs from "fs";
import path from "path";
import qs from "querystring";
import writeJson from "./src/jsonData/writeJson.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.static("src"));
//json
app.get("/data", (req, res) => {
    const jsonData = fs.readFileSync("src/json/data.json", "utf8");
    res.writeHead(200, { "content-type": "application/json" }, () => {
        console.log("성공");
    });
    res.end(jsonData);
});
// 추가
app.post("/update", (req, res) => {
    let bodyData = req.body;
    console.log(bodyData);
    writeJson(bodyData);
    const page = fs.readFileSync("public/update.html");
    res.end(page);
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`3001서버 http://localhost:${PORT}`);
});
