// Find if there is the same number of x's and y's in a string.

//Step 1 count how many times element x occurs in a string.

let string = 'xxxyyy';

const amountOf = function(temp) {
  let numX = temp.split("x").length -1;
  let numY = temp.split("y").length -1;
   if (numX === numY) {
       return true;
   }
   return false;
};

if (amountOf(string) === true) {
    console.log(`The amount of x's is equal to the amount of y's.`)
} else {
    console.log(`Their is not an equal amount of x's and y's.`)
};

//step 2 see if each element appears the same amount of times.

