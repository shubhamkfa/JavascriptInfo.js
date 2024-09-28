function pal(word){
    let palindrome = word.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let result = palindrome.split('').reverse().join('')
    // console.log(result);
    
    // return palindrome==result 
    return result 

}

console.log(pal("A man, a plan, a canal: Panama"));
//addign new



function pal2 (word){
    let a = word.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let final = a.split('').reverse().join('')
    return final
}

console.log(pal2("sbsbsbs"));

// let word2 = "abab$%^&aba"

function pal3(word2){
    let a = word2.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    result=a.split('').reverse().join('')
    return a == result
    

}
console.log(pal3("A man, a plan, a canal: Panama"))