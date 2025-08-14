let score = "33abc";

// console.log(typeof score); // number

let valueInNumber = Number(score);

// console.log(typeof valueInNumber); // number

// "33" => 33
//"33abc" => NaN
// null => 0
// undefined => NaN

let isLoggedIn = "string";

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn); // true

// 1 => true ; 0 => false
// "" => false ; "string" => true

let someNumber = 33

let StringNumber = String(someNumber);
// console.log(typeof StringNumber); // "33"

// *********** Operations *************** //

let value = 3;

let negValue = -value;
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);   
// console.log(2%2); // 0
// console.log(2**2); // 4

let str1 = "hello"
let str2 = "world";
let str3 = str1 + " " + str2;
console.log(str3); // "hello world"

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "2"); // "12"

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101