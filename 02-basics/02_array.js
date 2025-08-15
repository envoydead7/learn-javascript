const marvel_heros = ["thor", "ironman", "hulk", "spiderman", "captain america"];
const dc_heros = ["batman", "superman", "wonder", "flash", "aquaman"];

// adds the dc_heros array to the end of the marvel_heros array creating a nested array
marvel_heros.concat(dc_heros);
// instead of using push, we can use concat to merge two arrays
const allHeros = marvel_heros.concat(dc_heros);

console.log(allHeros); // ['thor', 'ironman', 'hulk', 'spiderman', 'captain america', 'batman', 'superman
const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(marvel_heros);
console.log(all_new_heros); // ['thor', 'ironman', 'hulk', 'spiderman', 'captain america', 'batman', 'superman', 'wonder', 'flash', 'aquaman']

const another_array = [1, 2, 3, [4, 5], 6, 7, [8, 0, 8, 3, [0, 314, 180]]];

const real_another_array = another_array.flat(Infinity); // flattens the array to a depth of 2
console.log(real_another_array); 

console.log(Array.isArray("hello"));

console.log(Array.from("hello"));
console.log(Array.from({name: "Mustafa", age: 30})); // creates an array from an object, but only the enumerable properties are included 
//and returns an array which is empty because the object has no enumerable properties

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // creates an array from the arguments passed to it