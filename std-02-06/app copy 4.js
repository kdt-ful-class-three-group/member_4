"use strict";
const a = function () {
    console.log("함수 a의 this : ", this);
    return a;
};
const b = () => {
    console.log("함수 b의 this : ", this);
};
a();
b();
