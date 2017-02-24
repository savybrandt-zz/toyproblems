/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  var flag = true
  var checkObj = function(obj1, obj2) {
    for (var key in obj1) {
      if(!obj2[key]) {
        flag = false
      } else if ( Object.keys(obj1).length !== Object.keys(obj2).length) {
        flag = false
      } else if ( typeof obj1[key] !== typeof obj2[key]) {
        flag = false
      } else if (typeof obj1[key] === 'object') {
        checkObj(obj1[key], obj2[key])
      } else if ( obj1[key] !== obj2[key]) {
        flag = false
      } 
    }
  }
  checkObj(apple, orange)
  return flag;
};
