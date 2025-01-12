// if else conditions
// < , > , <= , >= , == , != , === , !==

if (2 !== "2") {
    console.log("True!!!");
        
}else{
    console.log("False!!!");
}


// multiple conditions // Operators
// && , || , ??

const day = 1;

switch (day) {
    case (1):
        console.log("Mon");
        break;
    case (2):
        console.log("Tue");
        break;
    case (3):
        console.log("Wed");
        break;

    default:
        console.log("nothing");
        break;
}

// falsy values
// false, 0, -0, BigInt (0n), NaN, "", null, undefined

// truthy values
// "0", " ", 'false', {}, [], function(){}

// ternary operator
// condition ? true : false

(1000 <= 100) ? console.log("True!!") : console.log("False!!!");


// ??
val1 = 5 ?? 10
val2 = null ?? 20
val3 = undefined ?? 30
val4 = null ?? undefined ?? 100
console.log(val1, val2, val3, val4);
