//What is the smallest positive number that is evenly divisible (no remainder) by all of the numbers from 1 to 20?

let array = [];

function evenlyDivisible() {
    let found = false;
    let n = 0;
    let i = 1;
    let maxDivider = 20;

    while (found === false) {
        n += maxDivider;

        while (n % i === 0 && i <= maxDivider) {
            if (i === maxDivider) {
                found = true;
            }
            i++;
        }
        i = 1;

    }
  console.log(n);
};

evenlyDivisible();

