/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

let n = 10

let numA = fib(n - 1);

let numB = fib(n - 2);

function fib(n) {

    if (n < 1) return console.log('Your number is less than 1.');
    
} return console.log('The number is ' + (numA + numB) + '!');
