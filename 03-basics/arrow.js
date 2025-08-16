const user = {
    username: 'john_doe',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our store!`);
    }
}

user.welcomeMessage(); // Output: john_doe, welcome to our store!

console.log(this); //prints the current context

// if you do console.log(this) in browser, it will print the window object

function chat(){
    let username = "mustafa";
    console.log(this.username); // undefined, because 'this' refers to the global context where username is not defined
}
// this.username undefined aayega because it works in object context, not in global context or inside a function
chat();

const chai = () => {
    let username = "mustafa";
    console.log(this.username);
}

chai()