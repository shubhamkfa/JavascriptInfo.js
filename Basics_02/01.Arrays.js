//arrays

//we can write array in [] - 
// Curley brecess {}
// parenthesis ()
// squere bracket  [elements ]

// element can be different like string ,number boolean 

// Simple type 
// arrays is an object type
// we can add array inside array 

// we declare array in below ways 

const myArr1 = ["shubham",1,2,4,5,6,3]

const heros = ["shaktiman","naagraj"]

const myarr2 = new Array (1,2,3,4,"shubham",5) // here we dont add [] 

// console.log(myarr2[0]);
// console.log(typeof myarr2);
// console.log(myarr2.length);


// if we copy in array then 
// shallow copy of an object is a copy whose properties share same reference 
// deep - do not share same reference 


const myArr= [0,1,2,3,4,5]

// there are multiple methods in arays 
//.push
myArr.push(77) 
// console.log(myArr)

// pop - last value will remove 
myArr.pop()
// console.log(myArr);


//unshift() // it will shift the value in start 
// but we will not use this as its add value in first and change the other datas values and its a 
// Optimization issue ( but we can use if needed as per req)

myArr.unshift(0)

// console.log(myArr);

// shift  - it will remove our first value from arrays 

myArr.shift()
// console.log(myArr);

// include will written boolean value 
// console.log(myArr.includes(6)); // true 
// console.log(myArr.indexOf(2)); // 1 



// *****************************.Join() - add all the element into array as string  
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);



// console.log(typeof myArr); //object as its arrays
// console.log(typeof newArr); //string



// slice , splice  ( writtens a section of array )

const myArrr= [0o0,10,20,30,40,50]

console.log("A Origional",myArrr);

const newAfterSlice = myArrr.slice(1,5)

console.log("slice:", newAfterSlice);

console.log("Origional after Slice ( no changes in origional array ):", myArrr);




const newAfterSplice = myArrr.splice(1,4)
console.log("Splice result : ",newAfterSplice);
console.log("Origional after splice (changes in origional array ) :",myArrr);










