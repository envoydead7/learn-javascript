let score = "33abc";

console.log(typeof score); // number

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // number

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
console.log(typeof StringNumber); // "33"

