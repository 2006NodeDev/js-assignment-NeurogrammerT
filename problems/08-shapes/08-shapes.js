/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/ 

function square(height, character) {
  
  let h = height;

  while (h > 0){
    
    console.log(character.repeat(height));
    
    h--;
  }
   
  console.log("\n")
};

function triangle(height, character) {
  
  let h = height;
  
  let len = 1;

  while (h > 0){
    
    console.log(character.repeat(len));
    
    h--;
   
    len++;
  }
  
  console.log("\n")
};

function diamond(height, character) {
  
  let h = 1;
 
  let floor = Math.floor(height/2);
  
  while (floor >= 0){
    
    console.log(' '.repeat(floor) + character.repeat(h) + ' '.repeat(floor));
 
    h += 2;
   
    floor --;
  }

  h -=2;
  
  floor++; 
  
  while(h > 1){
  
    h -= 2;
    
    floor++;
    
    console.log(' '.repeat(floor) + character.repeat(h) + ' '.repeat(floor));
  }
 
  console.log("\n")
};

function printShape(shape, height, character) {
    
  switch (shape) {

    case "square":
      square(height, character)
      break;
    
    case "triangle":
      triangle(height, character)
      break;
    
    case "diamond":
      diamond(height, character);
      break;
    
    default:
      console.log("Only valid shapes may be used. Valid shapes are 'square', 'triangle' or 'diamond'.")
  }
}

printShape("square", 2, "%");

printShape("triangle", 6, "$");

printShape("diamond", 10, "*");