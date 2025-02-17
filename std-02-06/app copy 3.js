"use strict";
//? 함수 b를 쓰기로 선언했다.
function b() {
    console.log("익숙해");
}
//? 함수를 만들긴 했는데 잠시 변수 a에 넣어놓는다.
const a = function () {
    console.log("킝 신기하지?");
};
// ? 객체 만들려고 했는데 갑자기 함수가 필요할 떄
const c = {};
c.sentence = function () {
    console.log("이건또 뭐래 메서드");
};
