/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.tail = null;
  this.head = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
	if(!this.tail) {
		this.tail = this.makeNode(value)
		this.head = this.makeNode(value)
	} else {
		this.tail.next = this.makeNode(value)
		this.tail = this.tail.next
	}
};

LinkedList.prototype.removeHead = function() {
	var oldHead = this.head;
	if(this.head.next) {
		this.head = this.head.next;
	} else {
		this.head.value = null;
	}
	return oldHead.value;
};

LinkedList.prototype.contains = function() {
};

LinkedList.prototype.makeNode = function(value) {
    return {value: value, next: null};
};
