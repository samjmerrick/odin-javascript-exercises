const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((t, v) => t += v, 0);
};

const multiply = function(...args) {
  return args.reduce((t, v) => t *= v, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let sum = 1;
  for (let i = num; i > 0; i--){
    sum *= i;
  }
  return sum;
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
