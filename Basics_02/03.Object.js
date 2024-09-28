// Singleton 
// Object.create // constructor

//object Literals

const mySymbol = Symbol ("Key1")

const jsUser = {

    name:"Shubham",
    "full Name": "Shubham SHinde",
    age : 23 ,
    location :"jaipur",
    email : "shubhams@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday","Sunday"],
    [mySymbol] : "myKey11"


}
//two way to print onject value
//method 1

// console.log(jsUser.location);
//method 2 
//
// console.log(jsUser["age"]);
// console.log(jsUser.lastLoginDays);

// console.table(jsUser)

// console.log(jsUser["full Name"]);

// console.log(typeof jsUser.mySymbol);
// console.log(typeof jsUser[mySymbol]);

jsUser.age = 30 
// console.log(jsUser["age"]);

// Object.freeze(jsUser) // we have freeze object here so no more value can be change in this object 

// console.log(jsUser);

jsUser.age = 45 
// console.log(jsUser);



jsUser.greeting = function(){
    return "return shubham"
    
}
console.log(jsUser.greeting());


// same object reference then we have to use this.onject name 

jsUser.greeting2 = function(){
    console.log(`"Hello JS User", ${this.name} and my age is ${this.age}`);
   
}


    jsUser.greeting2();


