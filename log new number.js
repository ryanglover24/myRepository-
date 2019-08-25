//print a new number by adding one to each of it's digits.

const addOneTo = function(temp) {
  let toString = temp.toString();
let array = [];
  for (const i of toString) {
   array.push(i)   ;
  }
    console.log(array);

  array.forEach((a) => {
     array[a] += 1;
  })
    console.log(array);

};

addOneTo(1235465465132);