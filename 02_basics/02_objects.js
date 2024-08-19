// const tinderUser = new Object() // singleton

const tinderUser = {}

tinderUser.id = "bastab00";
tinderUser.name = "Bastab"
tinderUser.email = "bastabgogoi@123"

// console.log(tinderUser);

const bumble = {
    email: "basxhjsnj@kahdkan",
    fullname: {
        username:{
                firstname: "Bastab",
                lastname: "Gogoi"
        }
    }
}
// console.log(bumble.fullname.username, tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "bastcjn"
    },
    {
        id: 1,
        email: "bastcjn"
    },
    {
        id: 1,
        email: "bastcjn"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "cchaibsj",
    price: "6545",
    courseInst: "Bastab"
}

// course.courseInst

const {courseInst: Inst} = course

console.log(Inst);


// json

// {
//     "name": "Batsab"
//     "course": "hduqwkhwk" 
// }

[
    {},
    {},
    {}
]


