// Given an array of characters, return the array with every vowel doubled. For example:

// 'what on earth are you talking about?'
// 'whaat oon eeaarth aaree yoouu taalkiing aaboouut?'
// Constraints

// The challenge in this problem is in meeting its (arbitrary) constraints:

// Do not convert into strings or manipulate strings at all.
// Do not create any other data structures.
// In particular, don't instantiate a new array.
// The big-O of the solution should be O(n).


var vowelDoubler = function(array) {
	var hold = null;
	array.forEach(function(letter, i) {
		if (hold !== null) {
			var newHold = letter;
			array[i] = hold;
			hold = newHold;
		} else if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
			hold = array[i+1]
			array[i+1] = letter
		} 
	});
	return array;
}