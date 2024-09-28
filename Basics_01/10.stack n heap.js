/* Stack memory (primitive data type)

[] 
[]
[]

*/

/* heap memory ( non primitive/ reference)

[   ]


let empName ="shubham"

let empTwo = empName
empTwo= "Pragati"
empTwo="shinde"


console.log(empName);
console.log(empTwo);
*/

//Heap


let userOne={
    email: "userone@ggl.com",
    upi : "hsubha@ybl"

}

// console.log(useOne.email)

let userTwo = userOne

// console.log(userTwo);

userTwo.email="pragatichanged@gmail.com"
console.log(userOne);

console.log(userTwo)

//here value got change for both user or variables



