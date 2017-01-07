/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  //create a container for our results
  var results = [];
  //get each number
  var numbers = digitString.split('');
  //go through each number
  var makeWords = function(numIndex, wordSoFar) {
    if (numIndex === 3) {
      results.push(wordSoFar);
      return;
    }
    numIndex++
    var number = numbers[numIndex]
      //get the letters associated with that number
    var letters = phoneDigitsToLetters[number].split('');
    //for each letter in the number
    for (var l = 0; l < letters.length; l++) {
      //create a new string starting with that letter
      var word = letters[l];
      //add the other letters from the rest of the numbers
      makeWords(numIndex, wordSoFar.concat(word))
    }
  }
  makeWords(-1, '');
  //return our results
  return results;
};
