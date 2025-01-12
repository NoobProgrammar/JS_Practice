const array = [1, 11, 111, 1111, 11111, 111111]

for (let ijk = 0; ijk < array.length; ijk++) {
    const element = array[ijk];
    if (element === 111) {
        // console.log("its 111");
    }
    // console.log(element);
}

for (let i = 10; i >= 0; i--) {
    console.log(`Outer: ${i}`);
    for (let j = 12; j >= 0; j--) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

