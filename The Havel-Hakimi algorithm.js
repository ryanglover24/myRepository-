
let array = [5, 3, 0, 2, 6, 2, 0, 7, 2, 5];

let removeZeroValuesTwo = function(temp) {
 return temp.filter(num => num != 0);

};

const sortDescending= function(arr) {
  return arr.sort().reverse();
};

const arrLongerThanN = function(n, arr) {
   let x = false;
    if (n > arr.length) {
        x = true;
    }
    return x;
};

const subOneFromNElements = function(n, arr) {
 for (let x = 0; x < n; x++) {
    arr[x] -= 1;
 }
 return arr;
};

const run = function (temp) {
 let bool = true;
 let bool2;
 while (bool) {
     //step 1:
    temp= removeZeroValuesTwo(temp);
     //console.log(temp);
     //step 2:
     if (temp.length === 0) {
         bool = false;
         bool2 = true;
     }
     //step 3:
     temp= sortDescending(temp);
     //step 4:
     let N = temp.shift();
     //step 5:
     if (N > temp.length) {
         bool = false;
         bool2 = false;
     }
     //step 6:
     temp= subOneFromNElements(N, temp);
 }
//console.log(temp);
 return bool2;
};

if (run(array) === true) {
    console.log('They are telling the truth')
} else {
    console.log('They are lying')
};


