"use strict";
const students = [
    "김민지",
    "김요훈",
    "김윤지",
    "김재승",
    "손정민",
    "안은별",
    "윤종환",
    "최정민",
    "최현준",
    "전선일",
];
function forLoopForArray(targetArray, callback) {
    const arrayLength = targetArray.length;
    for (let i = 0; i < arrayLength; i++) {
        //절차적 foreach > 선언적
        callback(targetArray[i], i, targetArray);
    }
}
forLoopForArray(students, function (student, index, array) {
    //+
    console.log(student);
    console.log(index);
    console.log(array);
});
