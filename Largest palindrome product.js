// largest palinDrome of 2 three digit numbers.
let array = [];

function isPalindrome() {

    for (let a = 100; a < 1000; a++) {
    for (let b = 100; b < 1000; b++){
        let c = a * b;
        let d = c.toString();

        if (d[0] === d[5] && d[1] === d[4] && d[2] === d[3]) {
        array.push(c);
        }
    }

    }

};

isPalindrome()

const max = array.reduce(function(a,b) {
    return Math.max(a,b) ;
});

console.log(max);







