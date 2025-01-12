const useOfThis = {
    name: "UserName",
    id: "1234",
    welcomeMsg: function(){
        console.log(`${this.name}, has been logedin. With the id ${this.id}`);
    }
}
// useOfThis.welcomeMsg()
useOfThis.name = "NewName"
useOfThis.id = "5678"
// useOfThis.welcomeMsg()

function usingThis() {
    // const name = "NameName"
    console.log(this);
}
// usingThis()

const arrow = () => {
    const name = "NameName"
    console.log(this);
}
// arrow()

const addFive = (num) => {
    return num + 5
}
const addSix = (num) => (num + 6)
const addSeven = (num) => num + 7

