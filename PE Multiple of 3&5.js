//Project Euler adding all multiples of 3 and 5 below 1000 together.

let sum = 0;
let max = 1000;

const multipleSum = () => {
  for (let i =0; i < max; i++ ){
  if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
  }
  }
;}

multipleSum();
console.log(sum);










