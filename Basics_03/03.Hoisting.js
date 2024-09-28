//22. lecture
//need to watch clouser
// nested function child function can access parent function 

function one(){
    const username = "Shubham"
    function two(){
        const website =  "Youtube"
        console.log(username)
    }

    // console.log(website)

    two()

}

// one()


if(true){
    const user="shuhamPragati"
    if(user === "shuhamPragati"){
        const web = " Youtube"
        // console.log(user + web); //it will work
        
    } //scope
    // console.log(web);
    
}
// console.log(user);



// ***************-----------------Intresting example------------------- 
addOne(5) // here we can access below function value as it written in another format

function addOne(num){
    return num + 1

}



//------------------------
//function like variable expression 
// addTwo(4) // we cant declare it above function 
const addTwo = function (num2){
    return num2 + 2
}

// console.log(addTwo(2))
