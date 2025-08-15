// Stack is used in (Primitive) gets a copy of value vs Heap is used in (Non-Primitive)
// gets a reference of the original value 


// Example 

let myYoutubeName = 'maxWell';

let copyName = myYoutubeName;
copyName = "chai for two"; // 
// we get a copy of the value in stack, so changing copyName does not affect myYoutubeName
console.log(myYoutubeName, copyName); // maxWell maxWell

let user = {
    email: "user@google.com",
    userId: 123

}

let user2 = user;

user2.email = "mustafa@google.com"
user2.userId = 456

console.log(user, user2);

// user2 variable is declared in stack, but it holds a reference to the user object in heap
// so changing user2 will also change user, because they both point to the same object in heap