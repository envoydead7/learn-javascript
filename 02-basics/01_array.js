const myArr = [1, 2, 3 , 5 , 2];

console.log(myArr); // [1, 2, 3, 5, 2]

for(let i = 0;i<myArr.length;i++){
    console.log(myArr[i]); // 1, 2, 3, 5, 2
}

// javacript array-copy operations create shallow copies 
// shallow copy means that the new array will have the same references to the objects in the original array
// which means if you change an object in the new array, it will also change in the original array
// and deep copy means that the new array will have new references to the objects in the original array
// which means if you change an object in the new array, it will not change in the original array
// const myArr2 = myArr.slice(); // creates a shallow copy of the array
// myArr2[0] = 100; // changing the first element of the new array
// console.log(myArr); // [1, 2, 3, 5, 2]
// console.log(myArr2); // [100, 2, 3, 5, 2]

const myHeros = ['Thor', 'Hulk', 'Ironman', 'Spiderman'];
console.log(myHeros); // ['Thor', 'Hulk', 'Ironman', '

// Array Methods 
 
myHeros.push('Black Panther'); // adds an element to the end of the array
console.log(myHeros); 

myHeros.pop(); // removes the last element of the array
console.log(myHeros); // ['Thor', 'Hulk', 'Ironman']
myHeros.unshift('Captain America'); // adds an element to the beginning of the array
console.log(myHeros);
myHeros.shift(); // removes the first element of the array
console.log(myHeros); // ['Hulk', 'Ironman']

console.log(myHeros.includes('blank panther')); // false

console.log(myHeros.indexOf('Hulk')); // 0, returns the index of the element in the array

const newArr = myHeros.join();

console.log(newArr);
console.log(typeof newArr); // string, because join() method returns a string

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr); // myArr remains unchanged, because slice() creates a shallow copy

const myn2 = myArr.splice(1, 3);
console.log(myn2); // [2, 3, 5], returns the removed elements
console.log("C ", myArr); // myArr is changed, because splice() modifies the original array

