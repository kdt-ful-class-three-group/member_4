"use strict";
function a() {
    function b() {
        return {
            truth: "공욱재는 미남이다.",
        };
    }
    const result = b(); //가변 함수 b에서 객체만 가져와서 result 에 담는다 이때 함수 b에 있는 객체는 그대로 남아 있다.
    result.truth = "사실은 추남이다.";
    console.log(result);
    console.log(b()); // 뷸변
    return b();
}
console.log(a() + "11");
a();
