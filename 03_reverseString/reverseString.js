const reverseString = function(input) {
let splitString = input.split("");
splitString.reverse();
let revInput = splitString.join("");
return revInput;
};

// Do not edit below this line
module.exports = reverseString;
