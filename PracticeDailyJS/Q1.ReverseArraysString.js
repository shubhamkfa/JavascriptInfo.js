
// Q.1 WAP to the reverse array

// by using array.reverse method

let array = ['css','javscript','html',1,2,3]
console.log(array.reverse());




// by using for loop
let reverseArray=[];
for (let i = array.length; i>0 ; i--){
    reverseArray.push(array[i-1]);
}
console.log(reverseArray);


// by using reduce RIGHT
let reverseArray2 = array.reduceRight((acc,el) => {
    acc.push(el);
    return acc;
    }, []);
    console.log(reverseArray2);


//********************************* String Reverse *********************************/

let str = "shubham"
let rev= str.split("").reverse()
console.log(rev.join(""))



// Date- 14-08-24


let date14= "aug14082024"
let rev14= date14.split("").reverse()
console.log(rev14.join(""))

