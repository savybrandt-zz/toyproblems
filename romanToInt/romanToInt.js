var romanToInt = function(s) {
    //create an object with the replacement values for each character
    var vals = {
      0: 0,
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      L: 50,
      C: 100
    };
    //split the string into the array
    var chars = s.split('');
    //go through each character
    for (var i = 0; i < chars.length; i++) {
        //replace character with the correct value
        if (chars[i] === 'I') {
           if (chars[i+1] === "V" || chars[i+1] === "X") {
               chars[i] = vals[chars[i] + chars[i+1]];
               chars[i+1] = 0;
           } else {
               chars[i] = 1;
           }
        } else {
            chars[i] = vals[chars[i]];
        }
    }
    //add the sum of the array
    var sum = chars.reduce((a, b) => a + b, 0);
    //return the sum
    return sum;
};