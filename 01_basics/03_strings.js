const name = "Bastab"
const age = 22

// console.log("My name is " + name + " and my age is " + age);

console.log(`Hello my name is ${name} and my age is ${age}`); // `` = back ticks


// another way to declare string

const gameName = new String(`Bastab`)

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = name.substring(0, 5)
console.log(newString);

const newString1 = name.slice(-4, 5)
console.log(newString1);

const newString2 = "   Bastab    "
console.log(newString2);
console.log(newString2.trim());

const url ="https://bastav%35cknnkck.co"

console.log(url.replace('%35', '-'))

console.log(url.includes('bastab'));

