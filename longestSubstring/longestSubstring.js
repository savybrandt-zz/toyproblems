/*

RETURN THE LENGTH OF THE LONGEST SUBSTRING THAT DOES NOT INCLUDE DUPLICATE CHARACTERS

*/

 var lengthOfLongestSubstring = function(s) {
    if( s.length === 0) {
        return 0;
    }
    var substring = [s[0]];
    var result = 1;
    var start = 1;
    for (var i = start; i < s.length; i++) {
        if (substring.indexOf(s[i]) !== -1) {
            if (substring.length > result) {
                result = substring.length;
            }
            i = start;
            substring = [s[start]];
            start++;
        } else {
            substring.push(s[i]);
             if (substring.length > result) {
                result = substring.length;
            }
        }
    }
    return result;
}; 

//OLEG'S SOLUTION
var lengthOfLongestSubstring = function(s) {
  longestDouble = 0;
  for(var i = 0; i < s.length; i++) {
    var substringStart = i;
    var substringEnd = i;
    while(!foundDouble && (substringEnd <= s.length-1)) {
      substringEnd++
      if (s.substring(substringStart,substringEnd).includes(s[substringEnd+1])){
        break;
      }
    }
    potentialLongestDouble = (substringEnd - substringStart) + 1 // +1 for count vs index;
    longestDouble = potentialLongestDouble > longestDouble ? potentialLongestDouble : longestDouble;
  }
  return longestDouble
};