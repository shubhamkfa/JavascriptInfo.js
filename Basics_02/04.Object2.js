


//non singleton
const tindernonsingleton = {
    name: "shubham",
    age : 25
}

// console.log(tindernonsingleton.name);



//Singlton

const tinderUser = new Object() 

// console.log(tinderUser);

tinderUser.id = "123abc",
tinderUser.name = "sammy",
tinderUser.email = "samm@gmail.com"


// console.log(tinderUser.email);

// nested object 

const anotherUser = {

    email: "shubhams@gmail.com",
    fullname : {

        userfullname:{
             username : "Shubham",
            password : "shubs"

        }
       
    }
}

,

// console.log(Object.keys(anotherUser)); 
// console.log(Object.values(fullname));

// console.log(anotherUser.fullname.userfullname.password);

const obj1 = {1: "a", 2: "b" }

const obj2 = {3: "a", 4: "b" }

const obj4 = {5 : "c" , 6 : "d"}

const obj3 = {obj1, obj2}

// console.log(obj3.obj1);

const combine = Object.assign({},obj1, obj2,obj4) // {} is optional - object assign 
// console.log(combine);

const obj5spread = {...obj1, ...obj2}
// console.log(obj5spread);





const users = [
    {
        id : 0,
        email : "shubs@gmail.com"
    },

    
    {
        id : 1,
        email : "shubsaa@gmail.com"
    },
    
    {
        id : 2,
        email : "shubs3@gmail.com"
    }

]

// console.log(users[0].email);

// console.log(Object.keys(users)); 
// console.log(Object.values(users));




// users[1].email


