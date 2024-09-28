//es6 bring so many feature - This
//This : - current 
//current contex

const user = {

    username : "shubham",
    price : 999,
    welcomeMessage : function (){
        console.log(`${this.username}, Welcome to website`); //using this we can access current contex as its refer to current context 

        // console.log(this);
        

    }
} 

// user.welcomeMessage()
// user.username = "sam" // if we change the value ( context) it will change here
// user.welcomeMessage()


// console.log(this);


function chai (){
    console.log(this.username);
    
}
chai()
