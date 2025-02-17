// const { log } = require("console");
console.clear();
const obj = {
    a: "공욱재",
    b: "윤종환",
    c: "안은별",
};

const first = Object.keys(obj); // 객체의 key값 뽑기
const second = Object.values(obj); // 객체의 value값 뽑기
const third = Object.entries(obj); // 객체 배열로 뽑기

console.log(third);
console.log(third[0][1]);

for (let index = 0; index < third[0].length; index++) {
    console.log(third[0][index]);
}
