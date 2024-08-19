// singleton => constructor

// Object.create // constructor method

// Object literals => does not make singleton

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Bastab",
    "full name": "Bastab Gogoi",
    age: 52,
    [mySymbol]: "mykey1",
    location: "Assam",
    email: "bastab@gamilcnj",
    isLOggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySymbol]);


JsUser.email = "bastabgogoi0000"
// Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js");    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js, ${this.name}`);    // string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

