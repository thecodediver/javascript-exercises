function add (one = 0, two = 0) {
	return one + two;
}

function subtract (one = 0, two = 0) {
	return one - two;
}

function sum (obj){
	return obj.reduce((total, newItem) => total + newItem, 0);
}

function multiply (obj) {
	return obj.reduce((total, newItem) => total * newItem, 1);
}

function power(one = 0, two = 0) {
	return Math.pow(one, two);
}

function factorial(factor) {
	if (factor === 0){
		return 1;
	  }
	  return factor * factorial (factor - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}