let a = 55;

if(true){
    let a = 65;
    const b = 95;
//    console.log("Inner: ", a);
}

// console.log(a);



function one(){
    const username = "Basu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

// if(true){
//     // const username = "Basu"

//     if(username === "Basu"){
//         const website = " youtube"
//         // console.log(username + website);
        
//     }
//     // console.log(website);
//     // console.log(username);
// }


// ====================== interesting ======================

function addone(num){
    return num + 1
}

console.log(addone(5));


const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5));


