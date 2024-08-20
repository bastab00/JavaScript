const user = {
    username: "Basu",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}`);    
        console.log(this);
           
    } 
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this); // only works inside object not in functions
    
// }

// chai()


// const chai = () => {         // arrow function
//     let username = "Basu"
//     console.log(this);    
// }
// chai()



// const addTwo = (num1, num2) => {         // normal arrow function
//     return num1 + num2 
// }

// const addTwo = (num1, num2) => num1 + num2          // implicite return (no need to use parenthesis)

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Basu"})

console.log(addTwo(3, 4))

