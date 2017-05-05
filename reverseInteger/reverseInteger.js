/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

var reverse = function(x) {
    var num = x.toString();
    var result;
    num[0] === '-' ? result = ['-'] : result = [];

    for (var j = num.length-1; j >= 0; j--) {
        result.push(num[j]);
    }
    
    if (result[result.length -1] === '-') {
        result.pop();
    }

    result = Number(result.join(''));
    
    if( result > 2147483647 || result < -2147483647) {
        result = 0;
    } 
    return result;
};

// OLEG'S SOLUTION

var reverse = function(x) {
    var num = x.toString();
    
    var result = num[0] === '-' ? num.splice(0,1) : '';
    for (var i = num.length-1; i >= 0; i--) {
      result = result + num[i] 
    }
    
    result = Number(result)
    if ( result > 2147483647 || result < -2147483647 ) {
      return 0;
    }
    return result;
};