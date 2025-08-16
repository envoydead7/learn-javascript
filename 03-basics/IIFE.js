//Immediately invoked function expressions(IIFE)

(function chai(){

    //named IIFE
    console.log("DB connected");
})(); // add semi-colon to end scope


// which function is executed immediately 
// IIFE is used when global scope pollution needs to be removed which can
// issues therefore to remove that we use IIFE

//there would be problem
//sometimes with the below written code the javascript might not know 
// because of IIFE where the context ends 
(() => {
    
    console.log("DB connected two");
})();