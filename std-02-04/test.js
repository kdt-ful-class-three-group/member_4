// function greet(name = "손님") {
//     console.log(`안녕하세요, ${name}님!`);
// }
// greet("철수"); // 출력: 안녕하세요, 철수님!
// greet(); // 출력: 안녕하세요, 손님님!

// // 매개변수가 하나만 전달될 경우, 2와 곱하도록 기본값을 설정하세요.
// function multiply(a, b = 2) {
//     console.log(a * b);
// // }
// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     console.log(`총합: ${total}`);
// }

// sum(1, 2, 3, 4, 5); // 출력: 총합: 15
// sum(10, 20); // 출력: 총합: 30
// sum(); // 출력: 총합: 0

// multiply(4, 5); // 출력: 20
// multiply(7); // 출력: ???
// 나이 출력 함수
// printAge라는 함수를 작성하세요.
// age라는 매개변수를 받습니다.
// age가 전달되지 않으면 "나이를 입력해주세요!"를 출력합니다.
// 전달되었다면 "당신의 나이는 [age]살입니다."를 출력합니다.
function printAge(age) {
    if (isNaN(age)) {
        console.log(`당신의 나이는 ${age}입니다.`);
    } else {
        console.log(`나이를 입력해주세요`);
    }
}
printAge(25); // "당신의 나이는 25살입니다." 출력
printAge("wqeqwe"); // "나이를 입력해주세요!" 출력
