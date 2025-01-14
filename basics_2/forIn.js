const languages = {
    "py" : "python",
    "js" : "JavaScript",
    "rb" : "Rubby",
    "cpp" : "C++"
}

for (const key in languages) {
    console.log(`${key} : ${languages[key]}`)
}

// here maps are not iteratable using this mathod

const array = ["py", "js", "cpp", "java"]

for (const i in array) {
    console.log(array[i]);
    
}