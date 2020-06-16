/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

function objectProperties(someObj) {

    let name = someObj.name;

    let age = someObj.age

    let gender = someObj.gender

    return console.log(`My name is ${name}, I'm ${age} years old and I identify as ${gender}.`);
    
}

let testObj = {

    name:"Tanique",

    age:28,

    gender:"Female",
};

console.log(objectProperties(testObj));
