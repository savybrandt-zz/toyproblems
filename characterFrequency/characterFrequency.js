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
				//if so create a new pair and add to result array
				result.push([currentLetter, 1])
		} else {	
			//assume this is our first encounter of current letter
			var newLetter = true;
			//otherwise go through our results		
			for (var j = 0; j < result.length; j++) {
				var currentPair = result[j]
				//check if we have an existing pair for our current letter
				if (currentLetter === currentPair[0]) {
					//if so increase the count
					currentPair[1]++
					//mark it as not a new letter
					newLetter = false;
				}
			} 
			//if current letter is a new letter
			if (newLetter) {
			//create a new pair and add to result array
			result.push([currentLetter, 1])
			}
		}
	}

	//sort our result array =>

	//create a sorter function for count
	var countSort = function(a, b) {
   if (a[1] > b[1]) return -1;
   if (a[1] < b[1]) return 1;
   return 0;
	}
	//create a sorter function for letters
	var letterSort = function(a, b) {
   if (a[0] < b[0] && a[1] >= b[1]) { return -1 }
   if (a[0] > b[0] && a[1] <= b[1]) { return 1 }
   return 0;
	}
	//use array.sort with our sorter functions
	var countSorted = result.sort(countSort);

	var result = countSorted.sort(letterSort);

	//return result array
  return result;
};