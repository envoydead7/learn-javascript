const name = "Mustafa";

const repoCount = 13;

console.log(`Hello ${name}, you have ${repoCount} repos`); 

const gameName = new String("Mario Kart");
console.log(gameName.toUpperCase()); // [String: 'Mario Kart']
console.log(gameName);

console.log(gameName.charAt(4));
console.log(gameName.substring(0, 5));

const newString = gameName.substring(0, 3);
console.log(newString); // Mario

//substring with negative indices does not work as slice does and starts from 0

// slice works with negative indices
console.log(gameName.slice(-8, 5)); // Mario

//Trim method

const newStringOne = "  Hello World!   ";
console.log(newStringOne.trim()); // "Hello World!"

url = "https://www.youtube.com/watch?v=%20abc123";

console.log(url.replace('%20', '-')); // https://www.youtube.com/watch?v=abc123

console.log(url.includes('abc')); // https://www.youtube.com/watch?v=-abc123

console.log(gameName.split(' '))