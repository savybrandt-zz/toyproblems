/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var result = 0
  var findCombos = function(currentCombo) {
  	if(currentCombo.length === 3) {
  		var product = currentCombo.reduce(function(a,b){return a*b})
  		if(product > result) {
  			result = product;
  		}
  	}
  
  }
  findCombos([])
  return result;
};
