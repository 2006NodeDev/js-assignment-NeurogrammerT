/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
 
const stripLower = (someStr) => someStr.toLowerCase().replace(/[\W_]/g, '');

// Loop Method
function isPalindrome(someStr) {
  
    const strippedString = stripLower(someStr);

    for (let i = 0; i < strippedString.length / 2; i++) {
        
        if (strippedString[i] != strippedString[strippedString.length - 1 - i]) {
            
            return false;
        }
        
    }

    return true;

}

// JS Inbuilt method
// function isPalindrome(someStr) {
  
//     const strippedString = stripLower(someStr);

//     const reverseString = strippedString.split('').reverse().join('');

//     return reverseString == strippedString;

// }

console.log(isPalindrome('racecar'));

console.log(isPalindrome('Racecar'));

console.log(isPalindrome("racecar!"));

console.log(isPalindrome('carrot'));
