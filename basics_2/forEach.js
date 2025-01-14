const lang = ["py", "js", "cpp", "java"]

lang.forEach(function (item) {
    // console.log(item);
})

lang.forEach((i) => {
    // console.log(i);
})

lang.forEach((i, j, k) => {
    // console.log(i, j, k);
    
})
// the parametars that goes in the callback function are element, index and array

const arry = [
    {
        language: "python",
        languageFile: "py"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "javascript",
        languageFile: "js"
    }
]

arry.forEach((item) => {
    console.log(item.language);

})