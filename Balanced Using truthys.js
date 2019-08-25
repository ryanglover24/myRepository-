
const balanced = (string) => {
if (string % 2) {
    return false;
}
let counter = 0;
for (const i of string){
    if (i === 'x'){
        counter++;
    } else {
        counter--;
    }
}
if (counter) {
    return false;
} else {
    return true;
}
};

//balancedBonus

const balancedBonus = (string) => {
    let letterCount = {} ;

    for (const i of string) {
        if (letterCount[i]) {
            letterCount[i]++;
        }
        else {
            letterCount[i] = 1;
        }
    }
    let checker = string[0];

 for (const key in letterCount) {
     if (letterCount[key] !== letterCount[checker]) {
         return false;
     }
 }
return true;
};

let s = 'dddfffggghhh';

console.log(balancedBonus(s));
