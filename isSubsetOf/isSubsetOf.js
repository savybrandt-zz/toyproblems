/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
	//create a flag var and start as false
	var flag = false;
  //for each item in this array,
  this.forEach(function(item) {
  	//chek the indexof against the input array
  	if(arr.indexOf(item !== -1)) {
		  //if input array cointains, 
		  //change flag to true
  		flag = true;
  	} else {
  		//otherwise change flag to false
  		flag = false;
  	}
  })
  return flag
  //return flag
};
