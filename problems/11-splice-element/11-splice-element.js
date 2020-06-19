/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

let arr = ["Dog", 50, "Apple", 45, "Garfield", 100, "Racecar", 3000];

let fakeArr = [];

function spliceElement(someArr, index) {
  
    if (index > someArr.length || someArr === undefined) {
        
        console.log("Your entry is invalid! Please enter a valid array and index number.");
        
    } else {
        
        return someArr.splice(index);
    }
}

console.log(spliceElement(arr, 4));

console.log(spliceElement(arr, 15));

console.log(spliceElement(fakeArr, 5));

