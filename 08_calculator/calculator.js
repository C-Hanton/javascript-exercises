const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
    let result = a - b;
  return result;
  
};

const sum = function(array) {
	return array.reduce((total,current) => total + current, 0)
};

const multiply = function(array) {
return array.reduce((total, current) => total * current, 1)
};

const power = function(a, b) {
  let result = Math.pow(a, b);
  return result;
};

const factorial = function(num) {
	if (num < 0){
    return -1;
  } else if (num === 0){
    return 1;
  } else {
    return num * (factorial (num - 1))
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
