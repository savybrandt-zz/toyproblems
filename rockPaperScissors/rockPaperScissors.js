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

var rockPaperScissors = function(rounds) {
	//define our play options
var plays = ['rock', 'paper', 'scissors'];
//create a results array to hold our results
var results = [];
//define a recursive function to get results
var getResults = function(roundsLeft, currentRound) {
	//base case: if we've run through every round
	if (roundsLeft === 0) {
		//add current round to our results
		results.push(currentRound);
		//stop
		return;
	}
	//subtract 1 from our rounds left
	roundsLeft--
	//go through each play option
	
	for (var i = 0; i < plays.length; i++) {
		//add i play to our current round
		var round = plays[i];
		//call recursive function
		getResults(roundsLeft, currentRound.concat(round))
	}
};
//initiate recursive function
getResults(rounds, []);
//return results
return results;
};
