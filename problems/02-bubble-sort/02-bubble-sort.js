/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubbleSort(numArray) {
    
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < numArray.length; j++) {
            if (numArray[j] > numArray[j + 1]) {
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    return numArray;
}

let arr = [205, 68, 87, 3000, 1500, 5, 21, 600, 358];

console.log(bubbleSort(arr));
