// Find difference between sum of squares for 1-100.

let squareThenSum = 0;
let sumThenSquare = 0;

const sum = () => {
    for (i = 1; i <= 100; i++){
        sumThenSquare += i
    }
};

const squareSum = () => {
    for (i = 1; i <= 100; i++){
      let isqr = Math.pow(i, 2);
      squareThenSum += isqr ;

    }
};

sum();
squareSum();

let squared = Math.pow(sumThenSquare, 2);
let difference = squared - squareThenSum;
console.log(difference);


