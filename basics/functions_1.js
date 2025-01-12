function f1(distance, time) {
    const speed = distance / time;
    return speed;
}
// console.log(f1(100000, 10));

function totalCartProducts(...total) {
    return total;
}
// console.log(totalCartProducts(12, 34, 545, 664));

function newCart(v1, v2, ...val) {
    return val;
}
// console.log(newCart(123, 333, 4445, 6665, 323, 324));

function handleObject(anyObject) {
    console.log(`Hello, ${anyObject.name}. Your ID is ${anyObject.id}`);
}

// handleObject({
//     name: "abce dae",
//     id: "11234dde"
// })

function addFirstAndLastElementOfArray(getArray) {
    return (getArray[0] + getArray[getArray.length / 2]) 
}

console.log(addFirstAndLastElementOfArray([12, 223, 33, 2]));

