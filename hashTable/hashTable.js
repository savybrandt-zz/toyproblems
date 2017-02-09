/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, val) {
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[hash];
    if(!bucket) {
      storage.push(hash);
    }
    storage[hash].push([key, val]);
  };

  result.retrieve = function(key) {
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    var val = null;
    var bucket = storage[hash];

    if(bucket.length === 1) {
      val = bucket[0][1];
    } else {
      for(var i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
          val = bucket[i][1]
        }
      }
    }
    return val;
  };

  result.remove = function(key) {
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    var val = null;
    var bucket = storage[hash];

    if(bucket.length === 1) {
      val = bucket[0][1];
      delete bucket[0];
    } else {
      for(var i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
          val = bucket[i][1]
          delete bucket[i]
        }
      }
    }
    return val;
  };

  return result;
};
