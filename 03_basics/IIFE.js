// Immediately Invoked Function Expressions (IIFE)

// Global Scope pollution nhi chahiye aur immediately execute ho jaye

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

((name) => {
    // normal IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})(`Basu`)

