// add even values in fibonacci below 4 million.

let sum = 0;
let max = 4000000;

const sumEvenValues = () => {
let temp;
let a = 0;
let b = 1;
while (b < max) {
    temp = a;
    a = b;
    b += temp;
    if(b % 2 === 0) {
        sum += b;
    }
}
};

sumEvenValues();
console.log(sum);