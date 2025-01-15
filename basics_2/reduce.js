const myCart = [10, 20, 30]

let myTotal = myCart.reduce((acc, curval) => (acc + curval), 0)
console.log(myTotal);

myTotal = myCart.reduce(function (acc, currval) {
    console.log(`acc: ${acc} , currval: ${currval}`);
    
    return (acc + currval);    
}, 10)
console.log(myTotal)