/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

arr = ["Dog", 50, "Apple", 45, "Garfield", 100, "Racecar", 3000];

function spliceElement(someArr, index) {
  
    return someArr.splice(index);
}

console.log(spliceElement(arr, 4));

