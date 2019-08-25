// What is the largest Prime factor of the number 600851475143?

function isFactorOfN(n) {
    let i = 2;
    while (i < n) {
        if (n % i === 0) {
            n /= i;
        } else {
            i++;
        }
    }
    return i ;
};


console.log(isFactorOfN(600851475143));





