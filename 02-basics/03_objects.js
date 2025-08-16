// object declaration of two types
//literal and constructor

//Singleton object is an object that is created only once
// and it is used to create a single instance of an object

// constructor object is an object that is created using the new keyword
// and it is used to create multiple instances of an object
Object.create // is used to create a new object with the specified prototype object and properties

// object literal 

const mySym = Symbol("key1");
const JsUser = {
    // keys and values 
    name: "Mustafa", 
    "full name": "Mustafa Hossain", // keys can have spaces, but must be accessed with bracket notation
    [mySym]: "myKey1",
    age: 30, 
    isLoggedin: true, 
    email: "hitesh@google.com",
    location: "Palestine",
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

console.log(JsUser.name); //. notation
console.log(JsUser["email"]); // bracket notation
console.log(JsUser["full name"])

// Symbol


console.log(JsUser[mySym]); // accessing symbol key using bracket notation

JsUser.email = "hitesh@";
//Object.freeze(JsUser); // freezes the object, so no new properties can be added and existing properties cannot be modified;

JsUser.greet = function(){
    console.log(`Hello ${this["full name"]}`);
}

console.log(JsUser.greet());

// Objects through singleton and constructor

const tinderUser = new Object(); // singleton object

const interUser = {} // non singleton object

interUser.id = "139abc";
tinderUser.name = "Sammy";

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            FirstName: "Mustafa",
            LastName: "Hossain"
        }
    }
}

console.log(regularUser.fullname?.userfullName.FirstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2); // merges obj1 and obj2 into a new object
console.log(obj3); 

const users = [
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 2, 
        email: "h@gmail.com"
    }
]

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns an array of keys in the object

console.log(Object.values(tinderUser)); // returns an array of values in the object
console.log(Object.entries(tinderUser)); // returns an array of key-value pairs in the object


//object destructuring

const course = {
    courseName: "Javascript",
    price: 199,
    courseInstructor: "mustafa",

}

const {courseInstructor: instructor} = course;

console.log(instructor); 