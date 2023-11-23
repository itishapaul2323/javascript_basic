// Immediately Invoked Function Expressions (IIFE)


(function chai(){ //named iife
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon is required because it does not know when to end when there are two iife functions 

( (name) => { //unmade iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //iife is used to prevent pollution from global scope