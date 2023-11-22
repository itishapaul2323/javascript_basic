// array

// array nakes shallow copies
//shallow copies are the copies whose properties share the same reference point

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // adds value at the end
// myArr.push(7)
// myArr.pop() //removes the last value from array 


// myArr.unshift(9) //inserts at the beginning of array, but pushes all elements hence not peferable
// myArr.shift() //removes first element of the array 


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // adds all element of an Array into a String

// console.log(myArr);
// console.log( newArr);


// slice, splice

//slice - returns a Copy of an Section of Array , end range is exclusive, 
//splice - it manipulates the original array and divides it
// and create new array from the original array based on range, whihc is inclusive

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);