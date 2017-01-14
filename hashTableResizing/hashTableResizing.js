/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
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
  var storageLimit = 4;
  var size = 0;

var resize = function(size, storageLimit) {
  if(size/storageLimit < 0.25) {
    storageLimit = storageLimit / 2;
  }
  if(size/storageLimit > 0.75) {
    storageLimit = storageLimit * 2;
  }
}
  
  result.insert = function(key, value) {
    var newKey = getIndexBelowMaxForKey(key, storageLimit);
    var newTuple = [key, value];
    storage[newKey] = storage[newKey] || [];
    storage[newKey].push(newTuple);
    size++
    resize();
  };

  result.retrieve = function(key) {
    var newKey = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[newKey].length === 1) {
      return storage[newKey]
    } else {
      forEach(storage[newKey], function(tuple) {
        if (tuple[0] === key) {
          return tuple;
        }
      })
    }

  };

  result.remove = function(key) {
    var newKey = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[newKey].length === 1) {
      delete storage[newKey]
      size--;
      return;
    } else {
      forEach(storage[newKey], function(tuple) {
        if (tuple[0] === key) {
          delete tuple;
          size--;
          return;
        }
      })
    }
  };

  return result;
};
