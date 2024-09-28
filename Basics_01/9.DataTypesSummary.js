/* 

Javascript 



#Primitive 
primitive data type are call by reference , 
if we call it somewhere we will not get the exact location of that value but will get reference value that is coppied

Origional data refernce - > copy 


 Primitive data types 

String
Number 
BigInt
Boolean
Null
undefined
Symbol

//We will not define type in javascript 

JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. 
Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly

*/
const score= 100
const scoreValue = 102.3


const isLogged = false 
console.log(isLogged); // boolean

console.log(typeof isLogged);


const outsideTemp= null
console.log(outsideTemp);

console.log(typeof outsideTemp); //null




let userEmails; 
console.log(typeof userEmails);
// Undefine

const id= Symbol("123")

const anotherId =Symbol("123") // unique identifier 

console.log(typeof id);
console.log(typeof anotherId); //Symbol


const bigNumber = 387458645786287245862989182324n // adding n in last will make that nummber as big in type

console.log(typeof bigNumber);// bigInt




/*  Non-Primitive / Reference Type

Arrays
Object 
Function
*/

//array


const heros =["shaktiman","nagraj","doga"]
console.log(heros);
console.log(typeof heros); //Onject

//object 

let myObj={

    name:"hitesh",
    age:22,
}

console.log(myObj);
console.log(typeof myObj); //Object

//function 

const myFun= function () {
    console.log("Shubham Don")
}
myFun()
console.log(typeof myFun); // function
