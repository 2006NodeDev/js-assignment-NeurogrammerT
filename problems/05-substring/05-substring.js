/* 5. Substring 
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex) {
    
    try{
        
        const size = someStr.length;
        
        if(someStr === undefined || startIndex === undefined || endIndex === undefined) throw "You must put in a valid string, start number and end number to receive a result."

        
        if(startIndex > size || endIndex > size) throw "You've inputed a start and/or end number that's greater than the length of the inputed string."

        
        else if((startIndex-endIndex) > -1) throw "Your start number cannot be greater than your end number!"

        return someStr.substring(startIndex, endIndex);
    }

    catch(err){
        return err;
    }

}

// Test logs
console.log(substring("Garfield", 2, 5));

console.log(substring("Garfield", 5, 2));

console.log(substring("Garfield", 20, 50));

console.log(substring("", 0));
