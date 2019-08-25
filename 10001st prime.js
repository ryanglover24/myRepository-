// what is the 10001st prime number.
function test_prime(n)
{

    if (n===1)
    {
        return false;
    }
    else if(n === 2)
    {
        return true;
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}

let array = [];

function addToArray() {
    x = 1;
    while (array.length <= 10001) {
       let test = test_prime(x);
        if (test === true) {
            array.push(x);
        }
       x++;
    }
};

addToArray();
console.log(array[10000]);





