// Immediately Invoked Function Expressions (IIFE)


(function chai(){ //named iife
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => { //unmade iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //iife is used to prevent pollution from global scope