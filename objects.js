const mySy = Symbol()

const User = {
    userName: "YourName",
    age: 20,
    location: "Mumbai",
    email: "user@gmail.com",
    [mySy]: "Symbol"
}

// console.log(User.age);
// console.log(User["email"]);
// console.log(User[mySy]);

User.location = "Dubai"

// Object.freeze(User)

// console.log(User);

User.greetings = function() {
    console.log(`Hello, ${this.userName}`);
}

// console.log(User.greetings());

const obj1 = new Object()
const obj2 = new Object()

obj1.name = "hello"
obj2.age = 100
obj2.realName = {
    fName: {
        F: "xyz",
        L: "xyz"
    }
}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// console.log(Object.keys(User));
// console.log(Object.values(User));

const allUsers = [
    {
        id: 1,
        uName: "xyz",
        email: "xyz@gmail.com"
    },
    {
        id: 2,
        uName: "xyz",
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        uName: "xyz",
        email: "xyz@gmail.com"
    },
]

// console.log(allUsers[1].id);

const shop = {
    sName: "shopshop",
    sOwner: "xxyyzz",
    sNumber: 123456,
}

const {sName: sn} = shop
console.log(sn);

