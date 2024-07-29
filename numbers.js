const num = 400

let number = new Number(1000)

console.log(num.toString().length);
console.log(number.toFixed(2));

let decimal = 123.855
console.log(decimal.toPrecision(4));

const zeros = 10000000
console.log(zeros.toLocaleString());
console.log(zeros.toLocaleString('en-IN'));

// // 

console.log(Math.abs(-8));
console.log(Math.round(12.3345));
console.log(Math.sqrt(15))
console.log(Math.pow(12,5));

console.log(Math.max(1, 2, 3, 45, 5, 64, 32, 11));

// rnadom number

console.log(Math.random().toPrecision(4));
console.log(Math.random()*10);
console.log(Math.ceil(Math.random()*10));

const min = 100
const max = 200

console.log(Math.round(Math.random()*(max - min)) + min);
