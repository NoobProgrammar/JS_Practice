// Iify (Immediately Invoked Function Expressions)

(function iifyFn() {
    console.log("DB Connected...");
})();

((uName) => {
    console.log(`Hello, ${uName}!!!`);
})("NewUser");
