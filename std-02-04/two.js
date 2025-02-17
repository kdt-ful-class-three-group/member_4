const dummyMax = 10;
const dummyData = { value: 5 };

function funcA(max) {
    let result = {};
    result.total = max; // 2. total = max = 10
    result.count = 0;
    result.data = {};
    return result;
}

function funcB(state, data) {
    let test = state; // 4. 이름을 다시 state에서 result로 변경해줌 근데 보여주기 위해서 test로 변경
    test.count = test.count + 1;
    test.data = data;
    return test;
}
let state = funcA(dummyMax); // 1. 시작하면서 max에 10을 보내줌 그리고 state에 담아줌
console.log("초기상태:", state); // 3. state = funcA에 있는 result
console.log("갱신상태:", funcB(state, dummyData));
