/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
	var results = [];
	var makeAnagrams = function(current, length, start) {
		if(length === 0) {
			results.push(current)
			return;
		}
		start++
		length--
		for (var i = start; i < string.length; i++) {
			makeAnagrams(current.concat(string[i]), length, start)
		}
	}
	makeAnagrams('', string.length, -1)
	return results;
};

