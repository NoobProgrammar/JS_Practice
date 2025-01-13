let i = 0;
while (i <= 10) {
    console.log(`Index: ${i}`);
    i = i + 2;
}

const array = [1, 11, 111, 1111, 11111]
let arr = 0;
while (arr < array.length) {
    console.log(`Array: ${array[arr]}`);
    arr ++;
}

arr = 0; //reset the variable
while (arr < array.length) {
    arr ++;
    console.log(`Array: ${array[arr]}`);
}


i = 0;
while (i <= 10) {
    i ++;
    console.log(`Array: ${i}`);
}

i = 11;
do {
    console.log(`DoWhile: ${i}`);
    i++;
} while (i<=10);
