console.log("Arrays");

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const superHeros = ["ironman", "hulk", "thor", "antman"]
let newArray = new Array(11, 12, 13, 14, 15)

mynumbers.push(100)
mynumbers.pop()

mynumbers.unshift(100)
mynumbers.shift()

console.log(mynumbers);

console.log(superHeros.includes("batman"));
console.log(superHeros.indexOf("hulk"));

let array1 = mynumbers.join()
console.log(typeof array1);

let myArray = [100, 200, 300, 400, 500, 600, 700]
console.log(`Original array: ${myArray} \n`);

console.log(`Slice: ${myArray.slice(2, 5)} \n`);
console.log(`After slice: ${myArray} \n`);

console.log(`Splice: ${myArray.splice(5, 6)} \n`);
console.log(`After splice: ${myArray} \n`);