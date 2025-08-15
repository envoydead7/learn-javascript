const score = new Number(100);

console.log(score);
const balance = new Number(100.3);
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // 100.30

const otherNumber = 23.687924;
console.log(otherNumber.toPrecision(2)); // 23.49   

const hundreds = 1000000;

console.log(hundreds.toLocaleString('en-IN'));

// ++++++++ Maths operations +++++++++

console.log(Math.abs(-42));
console.log(Math.round(34.2));
console.log(Math.ceil(34.2)); // 35
console.log(Math.floor(34.9)); // 34

console.log(Math.min(2, 3, 1, -5, 10)); // -5
console.log(Math.max(2, 3, 1, -5, 10));

console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1))) + min; 