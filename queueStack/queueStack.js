/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = [];
  this.count = 0;
  // add an item to the top of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    delete this.storage[this.count]
    this.count--
  };

  // return the number of items in the stack
  this.size = function() {
    return this.count;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value) {
    inbox.push(value)
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    outbox.push(inbox.storage[outbox.size])
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {
    return inbox.size - outbox.size
    // TODO: implement `size`
  };
};
