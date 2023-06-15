function convertToRoman(num) {
    let value = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    let roman = '';

    for (let letter in value) {

        while (num >= value[letter]) {
            roman += letter;
            num -= value[letter];
        }
    }

    return roman;
}

console.log(convertToRoman(36));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1006));
console.log(convertToRoman(3999));