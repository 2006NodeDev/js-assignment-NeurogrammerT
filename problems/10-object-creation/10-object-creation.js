/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let literalObj = { name: "Literal", Age: 21 };

let constObj = new Object();

constObj.name = "Constructor";

constObj.age = 28;

es6 = Object.create(literalObj);

es6.name = "ES6";

es6.age = 5;

console.log(literalObj);

console.log(constObj);

console.log(es6);


