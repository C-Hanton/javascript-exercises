const palindromes = function (str) {
    const alphaNumberical = "1234567890abcdefghijklmnopqrstuvwxyz"

    let cleanString = str
        .toLowerCase()
        .split('')
        .filter((character) => alphaNumberical.includes(character))
        .join('')


    let reversedString = cleanString.split('').reverse().join('')
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
