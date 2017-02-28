/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {
	var result;
	var findTarget = function(beginning, end) {
		var midpoint = Math.floor(((end - beginning) / 2) + beginning)
		if(array[midpoint] === target ) {
			result = midpoint;
			return;
		}
		if(target > array[midpoint]) {
			findTarget(midpoint, end);
		}
		if(target < array[midpoint]) {
			findTarget(beginning, midpoint);
		}
	};
	findTarget(0, array.length);
	return result;
};


