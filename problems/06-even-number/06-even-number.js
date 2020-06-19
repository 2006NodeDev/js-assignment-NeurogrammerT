/* 6. Even Number 
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {
  
    if((someNum & 1) == 0){
        return true
      }
      return false;
}

console.log(isEven(9));

console.log(isEven(6));

