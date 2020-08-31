// Sorting on planet Twisted-3-7

// There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: #The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

// Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

function sortTwisted37(array) {
    array.forEach(function (item, i) {
        if (item == 3) array[i] = 7;
        if (item == 7) array[i] = 3;
    });
        return array;
}

let tArray = [1, 5, 7, 9, 4, 3, 6, 3, 2, 7, 9, 8];

console.log(sortTwisted37(tArray));