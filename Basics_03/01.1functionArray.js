//sometime we will get the situation where we have to add multiple user data 

function calculateCartPrice(val1, val2, ...num1){
    return num1

}
// console.log(calculateCartPrice(200,400,500,622,325)); // we will get the situation where we have to add multiple items in our cart

// for that we have to user rest or spread operation rest (...)
//packing it in bunndle 
//we can pass multiple values in function with using spread or rest operator 

// createing object here and calling it from using function 

const user =
{
    username : "shubham",
    price  : 456,
    age : 30
}

function handleObject( anyobject ){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
    

}
handleObject(anyobject={{
    username : "shubham",
    price  : 456,
    age : 30
}
})

// we have to check type before calling it 



handleObject({
    username: "sham",
    age: 56
})



const MyarrayforFunction = [200,400,100,600]
function returnSecondValuefromArray(getarray){

    return getarray[1]
}
console.log(returnSecondValuefromArray(MyarrayforFunction)); // with usingf functiom

console.log(returnSecondValuefromArray([200,500,2,145]));

