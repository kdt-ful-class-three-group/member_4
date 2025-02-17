"use strict";
function busOne(busPrice, isWangbok) {
    if (isWangbok) {
        let result = busPrice * 2;
        return result;
    }
    else {
        let result = busPrice;
        return result;
    }
}
function busTwo(busPrice, count, addPrice) {
    let result = busPrice + count * addPrice;
    return result;
}
function first(busPrice) {
    let result = busTwo(busOne(busPrice, true), 2, 100);
    return result;
}
const firstResult = first(1400);
console.log(firstResult);
