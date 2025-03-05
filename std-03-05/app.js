//* 캐피터

//* 1
// setTimeout(anyWork, 2000);
// function anyWork() {
//   console.log("캐피터");
// }
//* 2
// let time = 1000;
// setTimeout(() => {
//   console.log("꼬부기");
//   setTimeout(() => {
//     console.log("어니부기");
//   }, 2000);
// }, 2 * time);

// setTimeout(() => {
//   console.log("거북왕");
// }, 3000);

//* 3
// let student = [];
// let name = "김재승";
// setTimeout(() => {
//   student.push(name);
//   console.log(student);
//   console.log(name.length);
// }, name.length * 1000);

// console.log(student);

//* 4

// function npstar(item) {
//   setTimeout(() => {
//     console.log(item);
//   }, 3000);
// }
// setTimeout(() => {
//   console.log("꼬부기");
// }, 0);
// console.log("어니부기");
// npstar("거북왕");

//*5

// setTimeout(() => {
//   console.log("꼬부기");
//   setTimeout(() => {
//     console.log("어니부기");
//     setTimeout(() => {
//       console.log("거북왕");
//     }, 1000);
//   }, 2000);
// }, 3000);
//*6
let yohoon = () => {
  setTimeout(() => {
    console.log("김재승은 미남이다.");
    yohoon();
  }, 1000);
};

yohoon()