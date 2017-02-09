// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
	var result = 0
	while (y > 0) {
		result+= x
		y--;
	}
	return result
};

var divide = function(x, y) {
	var result = 0
	var count = 0
	while (count < x) {
		result++
		count += y
	} if (count === x) {
		return result
	} else {
		//take the modulo and add it on to the end of our result as a decimal
	}
};


var modulo = function(x, y) {
	var count = 0
	while (count < x) {
		count += y
	}
	if(count === x) {
		return 0;
	} else {
		return x-(count - y);
	}
};


