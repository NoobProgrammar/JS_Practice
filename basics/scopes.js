

if (true) {
    let a = 10
    const b = 100
    var c = 1000
}
// console.log(a);
// console.log(b);
// console.log(c);
// var can get out of scope

function one() {
    const var1 = 11

    function two() {
        const var2 =22
        // console.log(var1);
    }
    // console.log(var2);
    two();
}

one();

// similar with if else statements

console.log(addOne(5)) //this type of functions can be called before
function addOne(num) {
    return num + 1;
}


const addFive = function (num){
    return num + 2;
}

console.log(addFive(11)) //this type of functions can not be called before