console.log("Date and time");

const myDate = new Date()

// console.log(`Date is ${typeof myDate} in js`);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let birthDate = new Date(2024, 0, 11)
// birthDate = new Date("2024-07-17")
// birthDate = new Date("05-12-2023")

// console.log(birthDate.toLocaleString());
// console.log(birthDate.toDateString());

console.log(myDate.toLocaleString('default', {
    weekday: 'long',
}));
