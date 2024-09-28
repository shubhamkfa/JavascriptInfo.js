

// for writing fundction we have keyword function 

function sayMyname (){

    console.log("s");
    console.log("sh");
    console.log("su");
}

// sayMyname // reference
// () - executation 

// sayMyname()

// function addTwoNumber(num1, num2 ) // ( parameters )

//method 1 

// function addTwoNumber(num1, num2 ) {

//     console.log(num1+num2);
    
// }

// const result = addTwoNumber(25, 5) //arguments 

// console.log(result);


//Method 2


function method2(num1, num2 ) {

    let result1 = num1 + num2
    return result1
    console.log(); // unreacheble coad it will never print  after result nothing will print 

    

}
const result2 = method2 ( 10 , 12)
// console.log(result2);

// log method2(5,6)

function result3 (number1 , number2){

    return number1 + number2
}

result3(44, 44) //  why this not printed ??????? we need to priunt this 



function loginuser(username) {
    if(username === undefined){
        console.log("Please enter username");
        return

    }

    return `${username} just logged in  ` 

}

// console.log(loginuser("SHubham"))

// console.log(loginuser()) // if we havent pass any value then will see value as a undefine 




function loginuser2(username2 = "Shub") {
    if(!username2){
        console.log("Please enter username ! ");
        return

    }

    return `${username2} just logged in  ` 

}

// console.log(loginuser("SHubham"))

console.log(loginuser2()) 


