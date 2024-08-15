let score = null;

//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber));

//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (Not a number)
// true => 1 ; false => 0

let isLoggedIn = 1;


let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "string" => true

// *************************** Operations *****************************

let value = 3

let negativevalue = -value
// console.log(negativevalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3); // power
// console.log(2%3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);

// let x = 3
// let y = x++

// console.log(x , y);

// let x = 3
// let y = ++x

// console.log(x , y);

// ===

// console.log(2 === 2);
// console.log("2" === 2);

// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Non Primitive (call by reference)

// Array, Objects, Functions

/* JavaScript is a dynamic language and not static, 
which means that variables can hold values of different types during runtime.
 Unlike languages such as Typescript or Java, you don't need to declare the
  data type of a variable explicitly. */

// Symbol

const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id === id2);

// const bigNumber = 8789356835689326832n // n laga dene se automatically BigInt banjata hai

// Array, Objects, Functions

const heros = ["ironman" , "cap"];

let myObj = {
    name: "Bastab",
    age: 21
}

const myFunction = function(){
    console.log("This is a function");   
}

