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

// Alternative way
// let memo = {//using an object as a dictionary not as an object like normal
//     1:0,
//     2:1,
// }


// let fib = (n) => {
    
//     if(memo[n] || memo[n] === 0){
//         return memo[n]
//     }
//     else{
//         memo[n] = fib(n - 1) + fib(n - 2)
//         return memo[n]
//     }
// }

// console.log(fib(10));