// calculate tax owed from Progressive taxation and make it so can change the tax brackets.

const calculateTax = function(temp) {
let tax = 0;
let bracketOneTax = 0;
let bracketTwoTax = 0.1;
let bracketThreeTax = 0.25;
let bracketFourTax = 0.4;
let bracketOneSize = 10000;
let bracketTwoSize = 20000;
let bracketThreeSize = 70000;

if (temp < 10000) {
    tax = 0;
};

if (temp > 10000 && temp < 30000) {
 tax = (temp - bracketOneSize) * bracketTwoTax;
}
else if (temp > 30000 && temp < 100000) {
tax = (bracketTwoSize * bracketTwoTax) + (temp - bracketTwoSize - bracketOneSize) * bracketThreeTax;
}
else if (temp > 100000) {
 tax = (bracketTwoSize * bracketTwoTax) + (bracketThreeSize * bracketThreeTax) + (temp - bracketThreeSize - bracketTwoSize - bracketOneSize) * bracketFourTax ;
};
return tax;
};

console.log(Math.floor(calculateTax(1234567)));