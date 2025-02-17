"use strict";
function first(busPrice, iswangbok) {
    if (iswangbok) {
        let result = busPrice * 2;
        return result;
    }
    else {
        let result = busPrice;
        return result;
    }
}
const firstResult = first(1400, true);
console.log(firstResult);
