

const convert = (R, G, B) => {
    let array = [R, G, B];
    let hex = '';
let remainder = temp % 16;
    let divideBySixteen = Math.floor(temp /= 16);

    let value = (value) => {
        if (value < 10) {
            hex = hex.concat(value);
        } else if (value < 16) {
            if (value === 10) {
                hex = hex.concat('A');
            } else if (value === 11) {
                hex = hex.concat('B');
            } else if (value === 12) {
                hex = hex.concat('C');
            } else if (value === 13) {
                hex = hex.concat('D');
            } else if (value === 14) {
                hex = hex.concat('E');
            } else if (value === 15) {
                hex = hex.concat('F');
            }

        }
    }

    array.forEach(value(divideBySixteen));

    value(remainder);

    return hex;

};

console.log(convert(142));


/* const convert = (temp) => {
    let hex = '';
    let remainder = temp % 16;
    let divideBySixteen = Math.floor(temp /= 16);

    let value = (value) => {
        if (value < 10) {
            hex = hex.concat(value);
        } else if (value < 16) {
            if (value === 10) {
                hex = hex.concat('A');
            } else if (value === 11) {
                hex = hex.concat('B');
            } else if (value === 12) {
                hex = hex.concat('C');
            } else if (value === 13) {
                hex = hex.concat('D');
            } else if (value === 14) {
                hex = hex.concat('E');
            } else if (value === 15) {
                hex = hex.concat('F');
            }

        }
    }

    value(divideBySixteen);
    value(remainder);

    return hex;

};   */
