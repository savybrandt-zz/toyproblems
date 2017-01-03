/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
	//create a result array to hold results
	var result = [];
	//split string into array of letters
	var letters = string.split('');

	//get the count for each letter =>
	//go through each letter
	for (var i = 0; i < letters.length; i++) {
		var currentLetter = letters[i];
		//check if our result array is empty
		if (result.length === 0) {
				//if so create a new pair
				var newPair = [currentLetter, 1];
				//and add to result array
				result.push(newPair)
		}

		for (var j = 0; j < result.length; j++) {
			var currentPair = result[j]
			//check if we have a existing array for our current letter
			if (currentLetter === currentPair[0]) {
				//if so increase the count
				currentPair[1]++
			} else {
				//if not create one 
				var newPair = [currentLetter, 1];
				//and add to result array
				result.push(newPair)
			}
		}
	}

	//sort our results array =>
	//go through each pair in our array starting with the second pair
		//check if current pair count is larger than the previous
			//if so swap them and check against  the next pair

	//return result array
  return result;
};