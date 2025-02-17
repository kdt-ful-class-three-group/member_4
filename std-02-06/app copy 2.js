"use strict";
const itMe = {
    name: "김재승",
    ags: 29,
    talmo: false,
    sentence: function () {
        console.log(this.name + "입니다");
    },
    qeustion: function () {
        console.log(this);
    },
};
itMe.sentence();
itMe.qeustion();
