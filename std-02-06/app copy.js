"use strict";
const itMe = {
    name: "김재승",
    ags: 29,
    talmo: false,
    sentence: function () {
        console.log("이건 메서드");
    },
};
itMe.sentence();
function sentenceTwo() {
    console.log(itMe);
}
sentenceTwo();
