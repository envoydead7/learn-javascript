/* 
    Topic 
    1. Javascript Execution Context - Global execution context which is this
    the this value is window object in browser
    2. Function Execution Context
    3. Eval Execution Context

    javascript is single threaded in nature
    
    code runs in two phase 
    1. Memory creation phase
    2. Execution phase


*/

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);