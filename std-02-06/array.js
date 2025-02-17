const colors = ["빨강", "초록", "파랑"];

// // Array.prototype.at(); // 배열의 인덱스에 [] 처럼 접근한다  ? 왜 쓰지
// // at() 메서드 사용
// const atWay = colors.at(0);
// console.log("at" + atWay); // '초록'

// // Array.prototype.concat(); //배열에 배열을 추가한다
// const concatWay = colors.concat("노랑");
// console.log(concatWay); // ["빨강", "초록", "파랑","노랑"]
// // Array.prototype.copyWithin(); // copyWithin(target, start, end); target : 복사한 요소를 붙여넣을 시작 위치 (인덱스) / start :	복사를 시작할 위치 (인덱스) / end (선택) : 	복사를 끝낼 위치 (인덱스, 미포함)
// const copyWithinWay = colors.copyWithin(1, 1, 2);
// console.log(copyWithinWay); //
// Array.prototype.entries();

//  Array.prototype.every(); // 테스트 메서드

// Array.prototype.fill();
// Array.prototype.filter();
// Array.prototype.find();
// Array.prototype.findIndex();
// Array.prototype.findLast();
// Array.prototype.findLastIndex();
// Array.prototype.flat();
// Array.prototype.flatMap();
// Array.prototype.forEach();
// Array.prototype.includes();
// Array.prototype.indexOf();
// Array.prototype.join();
// Array.prototype.keys();
// Array.prototype.lastIndexOf();
// Array.prototype.map();
// Array.prototype.pop();
// const popWay = colors.pop();
// console.log(popWay); //
// console.log(colors);

// Array.prototype.push();
// Array.prototype.reduce();
// Array.prototype.reduceRight();
// Array.prototype.reverse();
// Array.prototype.shift();
// Array.prototype.slice();
const sliceWay = colors.slice(1, 3);
console.log(sliceWay); //
console.log(colors);
// Array.prototype.some();
// Array.prototype.sort();
// Array.prototype.splice();
// Array.prototype.toLocaleString();
// Array.prototype.toReversed();
// Array.prototype.toSorted();
// Array.prototype.toSpliced();
// Array.prototype.toString();
// Array.prototype.unshift();
// Array.prototype.values();
// Array.prototype.with();
