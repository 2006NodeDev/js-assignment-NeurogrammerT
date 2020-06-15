/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

// Reverse() Method
function reverseStrOne(someStr) {
    return someStr.split("").reverse().join("");
}

// Loop Method
function reverseStrTwo(someStr) {
    let reverse = "";
    for(let char of someStr){
      reverse = char + reverse;
    }
    return reverse;
}

console.log(reverseStrOne("tlas"));

console.log(reverseStrTwo("reppep"));
