const leapYears = function(year) {
let isDivisibleByFour = year % 4 === 0;
let isCentury = year % 100 === 0;
let isDivisibleByFourHundred = year % 400 === 0;

if (isDivisibleByFour && (!isCentury || isDivisibleByFourHundred)){
    return true;
} else {
    return false;
}


};

// Do not edit below this line
module.exports = leapYears;
