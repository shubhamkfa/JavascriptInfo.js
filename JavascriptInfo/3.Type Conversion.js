//String Conversion 

let value = true
console.log(typeof (value))

value = String (value)
console.log(value);
console.log(typeof(value));


//*****************************Number Conversion ************************

let stringNum = "123"

// console.log(stringNum/"2");

console.log(typeof(stringNum))

stringNum = Number (stringNum)

console.log(typeof stringNum);
console.log((`**********${stringNum}************`));



// let numConversion = Number()

// console.log(numConversion); //NAN

// let numNull = Number(null)
// console.log(typeof(numNull));
// console.log(numNull);





//Explicit conversion is most important if we are expecting a typed data to be enter or that is the allowed validation for that field then we should have to get the data in mention form 

let age = Number ("I have provides wrong age : Thirty Years Old ")


console.log("**********"+ age); // NaN 

age = 30

console.log(`*************${age}************`);

// -------------*****

let a = ( Number("   123   ") ), // 123
 b = ( Number("123z") ) ,     // NaN (error reading a number at "z")
c = ( Number(true) ),       // 1
d = ( Number(false) );       // 0

console.log(a,b,c,d);



/////***********************Boolean */

let alert1= ( Boolean(1) ), // true
alert2 =( Boolean(0) ), // false

alert3 = ( Boolean("hello") ), // true
alert4 = ( Boolean("") ), // false

alert5 = ( Boolean("0") ), // true
alert6=( Boolean(" ") ); // spaces, also true (any non-empty string is true)

console.log(alert1,alert2,alert3,alert4,alert5,alert6);
