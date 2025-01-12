function addTwoNum(n1, n2) {
    return (n1 + n2)
}

function totalCart(i1, i2, ...rem) {
    return rem
}

// console.log(totalCart(123, 124, 1235, 341));

const user = {
    userName: "YourName",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to the course`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.userName = "NewName"
// user.welcomeMessage()

// console.log(this);

function thisFn() {
    console.log(this);
    
}
const arrow = () => {
    let xyz = "nnnmae oeoeof"
    console.log(this.xyz);
}
// arrow()
// thisFn()
// let x = 123
// console.log(this.x);

const divideNum1 = (num1, num2) => {
    return num1/num2
}

const divideNum2 = (num1, num2) => num1/num2

const divideNum3 = (num1, num2) => (num1/num2)
console.log(divideNum1(12, 2));
console.log(divideNum2(12, 3));
console.log(divideNum3(12, 4));
