/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fib(n) {

    if (n <= 0) return console.log("This number is invalid!");

    if (n === 1) return 0;

    if (n === 2) return 1;
    
    return fib(n - 1) + fib(n - 2);   
}

console.log("The resulting fibonacci number is: " + fib(6));