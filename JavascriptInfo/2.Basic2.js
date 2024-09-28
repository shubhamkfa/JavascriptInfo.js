//*********   Data Types */

let valueOne = Infinity
let valueTwo = 7890

// console.log(valueOne + valueTwo)

if(valueOne > 5476){
    console.log(true);
    
}


let Cart = [-1,-2,12,23,4,5,6,7]
console.log(Cart[-1]);


console.log(NaN ** 0); 



/* Summary 

There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.

*/

/*Task

A simple page
importance: 4
Create a web-page that asks for a name and outputs it.

*/

let webpageName = prompt("What is your webpage name","ex:Google")
alert(webpageName)