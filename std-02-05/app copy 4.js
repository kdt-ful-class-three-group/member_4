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
function first(busPrice, callback) {
    callback(busPrice);
}
const firstResult = first(1400, function (busPrice) {
    let result = busPrice * 2;
    return result;
});
console.log(firstResult);
