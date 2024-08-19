const user = {
    username: "Basu",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}`);       
    } 
}

user.welcomeMessage()