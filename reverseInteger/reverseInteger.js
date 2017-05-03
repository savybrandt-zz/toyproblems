/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

var reverse = function(x) {
    var num = x.toString();
    var result = [];
    if (num[0] === '-') {
        result = ['-'];
        for (var i = num.length-1; i > 0; i--) {
            if (num[i] > 0 || result.length > 1) { result.push(num[i]) }
        }
    } else {
        for (var j = num.length-1; j >= 0; j--) {
            if (num[j] > 0 || result.length > 0) { result.push(num[j]) }
        }
    }
    result = Number(result.join(''));
    
    if( result > 2147483647 || result < -2147483647) {
        return 0;
    } else {
        return result;
    }
};