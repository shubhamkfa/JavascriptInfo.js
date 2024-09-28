let x =123
    
//store the number in variable first 
let copy = x
    
//then convert the number into string 
    
x=x.toString()
    

// split into array 
x= x.split('').reverse().join('')


//convert x string back to number using parseInt
x=parseInt(x)
console.log(x);


console.log(typeof x);
