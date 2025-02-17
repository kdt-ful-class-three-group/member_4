// let a = {
//     title: "공욱재문서입니다.",
//     style: "body{background-color:gray;}",
//     body: "공욱재 문서입니다.",
// };

let a = ["qkdt", "tldu"];
const qs = require("querystring");
const fs = require("fs");
const qsString = qs.stringify(a);
console.log(qsString);
let test = qs.parse(qsString);
console.log(test);

fs.writeFileSync("test.txt", qsString);
