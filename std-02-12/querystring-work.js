console.clear();
const qs = require("querystring");

const stduent = {
    name: "공욱재",
    age: 26,
    home: "대전",
};

const test = qs.stringify(stduent);
console.log(test);

const a = "name=%EA%B3%B5%EC%9A%B1%EC%9E%AC&age=26&home=%EB%8C%80%EC%A0%84";

const work = qs.parse(a);
console.log(work);
