/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds) {
	var throws = ['rock', 'paper', 'scissors'];
	var results = [];
	var resultCount = 0;

	var roundGenerator = function() {
	  var round = [];
		//create random possible outcome for a 3 round game
		while (rounds > 0) {
			var randomThrow = throws[Math.floor(Math.random() * throws.length)];
			round.push(randomThrow);
			rounds--;
		}
		//check if that round already exists in our results array
		var flag = true;

		for (var i = 0; i < results.length; i++) {
		  var resultCheck = results[i];
			for (var j = 0; j < resultCheck.length; i++) {
				if (resultCheck[j] === round[j]) {
					flag = false;
				}
			}
			//dubug- ***flag at this point is currently coming up as undefined when it should be true or false***

			//if it doesnt, add it to our array if it does rerun roundGenerator
			if (flag) {
				results.push(round);
				resultCount++
			} else {
			  roundGenerator()
			}
		}
	};
	//check if we've gotten all results, if yes return, if not run roundGenerator
	if (resultCount === 27) {
		return results;
	} else {
		roundGenerator()
	}
};
