const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["supeman","flash","batman"]


// ********************Push 
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // 
// console.log(marvel_heros[3][2]); // bad syntax 

//*******************concat */


const allheros= marvel_heros.concat(dc_heros)
console.log(allheros);


//****we can use this aray only *********spread ...  we can spread glass drop kiya and glass spread hua 


const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


// *********************flat **********************

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


//******************for data srapping  */
// console.log(Array.isArray("shubham"))

// with using from we can convert into array
console.log(Array.from("shubham")) // for 

// we can pass many values 

let test= Array.from(Object.entries({name:"shubham"}))
console.log(test) // intresting we can make array with keys and values 


let score = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score,score2,score3));


