const coding = ["js", "ruby", "python", "java"]

// coding.forEach(  function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
// }  

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);   
// })


const myCoding = [
    {
        lanName: 'javascrpit',
        lanform: 'js'
    },
    {
        lanName: 'java',
        lanform: 'java'
    },
    {
        lanName: 'cpp',
        lanform: 'C++'
    }
]

myCoding.forEach( (item) => {
    console.log(item.lanName);
    
})