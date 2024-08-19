function saymyname(){
    console.log("B", 'a', 's');
    console.log("G");
}

// saymyname()


function addTwoNos(no1, no2){ // (no1, no2) these are called parameters
    //console.log(no1 + no2);

    // let result = no1 + no2 
    // return result

    return no1+no2
}

const result = addTwoNos(2 , 4) // (2 , 4) and these are arguments

// console.log('Result:', result);



function loginUserMessage(username = "Basuuu"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Basu"))
console.log(loginUserMessage())



function calculateCartPrice(value1, value2, ...num1){
    return num1
}

//console.log(calculateCartPrice(232, 7684, 45, 641, 54));

const user = {
    username: "Bastab",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "bas",
    price: 377
})

const myNewArray = [200, 4000, 622]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray));

