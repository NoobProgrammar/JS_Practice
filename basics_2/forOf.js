// for of
// array specific loop

const array = [1, 2, 3, 4, 5]

for (const val of array) {
    // console.log(val);
}

const hello = "Hello Mom"
for (const val of hello) {
    if (val == " ") {
        continue;
    }
    // console.log(val);
}

// map (data type -- similar to objects)
// unlike objects it can't have two same key value pairs

const map = new Map()

map.set("I", "Iron Man")
map.set("I", "Iron Man")
map.set("B", "Bat Man")
map.set("S", "Super Man")
map.set("T", "Thor")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":" , value);
}
// objects are not iterable like maps
// using the above method
