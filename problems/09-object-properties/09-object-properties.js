/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

let testObj = {

    name:"Tanique",

    age:28,

    gender:"Female",
};

// For when you know what properties an object will contain and to set up advanced opertions
function objectProperties(someObj) {

    let name = someObj.name;

    let age = someObj.age

    let gender = someObj.gender

    return console.log(`My name is ${name}, I'm ${age} years old and I identify as ${gender}.`);
    
}

// For when you don't neccesarily know what properties an object has or if you want the easy way
function objectProperties2(someObj) {

    return Object.values(someObj);
    
}

console.log(objectProperties(testObj));

console.log(objectProperties2(testObj));
