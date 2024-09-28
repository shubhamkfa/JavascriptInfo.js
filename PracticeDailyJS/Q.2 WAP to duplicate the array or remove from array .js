

//********************Using FOr loop and if condition  */

// let array = ['js',1,2,3,'js',2,'html','html','css','js','js','2'];

// let uniqueArray = [];

// for (let i=0; i<array.length; i++){

// if(!uniqueArray.includes(array[i])){
// uniqueArray.push(array[i]);
// }
// }
// console.log(uniqueArray);



// by using reduce 
// let uniqueArray = array.reduce((acc, currentValue) => {
// if(!acc.includes(currentValue)){
// acc.push(currentValue);
// }
// return acc;
// },[]);
// console.log(uniqueArray);




// **********chat gpt simple way 
// To find duplicate values in an array, you can use a Set and an array to keep track of duplicates:

const findDuplicates = (arr) => {
    const seen = new Set();
    const duplicates = new Set();
    
    arr.forEach(item => {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    });
    
    return Array.from(duplicates);
  };
  
  // Example usage:
  const array = [1, 2, 3, 2, 4, 5, 5, 6,6,7,1];
  console.log(findDuplicates(array)); // [ 2, 5, 6, 1 ]


  //To remove duplicate values from an array, 
//   you can use a Set to filter out duplicates, and then convert it back to an array:

const removeDuplicates = (arr) => {
    return Array.from(new Set(arr));
  };
  

function removedublicatefromarray(){
  
}

  // Example usage:
  const array2 = [1, 2, 3, 2, 4, 5, 5, 6];
  console.log(removeDuplicates(array2)); // [1, 2, 3, 4, 5, 6]
  

