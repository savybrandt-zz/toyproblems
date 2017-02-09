/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
	//make an array of all the letters in the string -including white space
	var chars = string.split('');
	//make a results variable to return
	var longest = '';
	//create a recusive function to go through every char combination
	var combos = function(currentGuess) {
	//*base case*//
		//if it is a palindrome and its longer than our current longest
		if(currentGuess === currentGuess.reverse() && currentGuess.length > longest.length)	{
				//.join it and reasign it as longest
				currentGuess.join('');
				//stop
				return;
		}
	//*bulid palindrome*//
		//start our each guess with each char
		for (var i = 0; i < chars.length; i++) {
			currentGuess = [chars[i]];
			//go through each char after our starting char and add it to our current guess
			for(var j = i; j< chars.length; j++) {
				combos(currentGuess.concat(chars[j]))
			}
		}
	} 
	//call our inner function
	combos([]);
	//return our result
	return longest;
};

longestPalindrome("My dad is a racecar athlete")
