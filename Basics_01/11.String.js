// we will use modern syntax for string 
const name = "shubham"
const repoCount = 50

console.log(name + repoCount + " Value"); // old concatinate method

// / New Method / 
// back ticks  i.e string Interpolation 

console.log(`My name ${name} and my age is ${repoCount} `);


// *****************************************************

const gameName =  new String('shubhampragatistr')

console.log(gameName[2]); //value pair access

console.log(typeof gameName);


//prototype
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));


console.log(gameName.indexOf('b'));

const newStr = gameName.substring(0.7)
console.log(newStr);


const anotherStr = gameName.slice(-5,4)
console.log(anotherStr)


const newString = "    shubham   pragati shubham  pragati     ";
console.log(newString.trim())




const url = "https://shubham.com/%20account/login"
//browser will convert ulr coading with % 



console.log(url.replace('%20','-'));



console.log(url.includes("shubha"));



// convetingg


console.log(url.split('/'));

console.log(gameName.small());



 













