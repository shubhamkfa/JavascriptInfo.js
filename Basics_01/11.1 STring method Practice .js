/* 1. JavaScript String Length
The length property returns the length of a string:

*/
let text = "shubhamShinde";
// console.log(text.length);




/*Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays

JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:
*/

// console.log(text.charAt(3))

// The trim() method removes whitespace from both sides of a string:
let strName ='     Pragati     shubham    shinde   '
// console.log(strName.trim());

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// console.log(strName.trimStart())

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// console.log(strName.trimEnd());

// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length

// console.log(strName.padStart(4,1));

console.log(strName.substr());
