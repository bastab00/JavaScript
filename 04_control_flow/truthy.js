const userEmail = []

if (userEmail) {
    console.log("got Email");
    
}else{
    console.log("no email");
    
}


// falsy value

// false, 0, -0, BigInt On, null, undefined, Nan

// truthy value

// "0, 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log('Array');
    
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Obj is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10 ?? 20

// console.log(val1);


// Terniary Operator

// condition ? true : false

const price = 100

price < 80 ? console.log("Less") : console.log("More");

