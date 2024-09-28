//capture the name from user
let name = prompt("Enter your name?")

//2. capitalize first letter of word
//a isolate the first character and uppar case it 
let firstChar=name.slice(0,1).toUpperCase()

//isolate the rest of the name 

let lastChar = name.slice(1,name.length)

lastChar= lastChar.toLowerCase()
//concatinate first char with last char 
alert(`Your name is ${firstChar+ lastChar}`)