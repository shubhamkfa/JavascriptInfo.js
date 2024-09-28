/* 1. toString :- using toString we can convert array into stringg with seperation by , comma  and this will not change the origional array 


const heros = ["Pragti", "shubham", "Shinde", "Batman", "Spiderman" ]

// i want to convert this into string so i will use toString here 

const newstr= heros.toString();
console.log(typeof newstr);

console.log(heros);

*/

/* 2 . Join ()
// the join () conver array into string 


const heros = ["Pragti", "shubham", "Shinde", "Batman", "Spiderman" ]

console.log(heros.join());

console.log(heros.join(""));

console.log(heros.join(" "));
console.log(heros.join("-"));

*/

/*  pop () :-  the pop removes the last element of an array and written the remianing element and it will change origional array 

const heros = ["Pragti", "shubham", "Shinde", "Batman", "Spiderman" ]

const lastVal = heros.pop()
console.log(lastVal);

console.log(heros);

*/


/*  4. push ( ) - The push adds new items to the end of an array 
// and its changes the length of the array 
//return the new lenght 

const heros = ["Pragti", "shubham", "Shinde", "Batman", "Spiderman" ]
console.log(heros.length);
console.log(heros.push("Shaktiman"));
console.log(heros);
console.log(heros.length);

*/

/* 5.shift() : - the remove the first element and origional array will be change 
const heros = ["Pragati", "shubham", "Shinde", "Batman", "Spiderman" ]

console.log(heros.shift());
*/



/* 6. unshift() - The unshift() adds element to beginning and returns new array length.


const heros = ["Pragati", "shubham", "Shinde", "Batman", "Spiderman" ]
console.log(heros.unshift("Ram"));

console.log(heros);

*/

/*7. delete array[index] - 
const heros = ["Pragati", "shubham", "Shinde", "Batman", "Spiderman" ]
console.log(delete heros[4]);


console.log(heros);

*/

//  const s= " shubham  is  hero "

var reverseWords = function(s) {
   
    // return (s.split(" ").reverse().join(" ").trim(" "));
    var test= s.split(" ").filter(elm=>elm).reverse().join(" ")
    
    
    
    return test
};

console.log(reverseWords(" shubham  is  hero "));   


