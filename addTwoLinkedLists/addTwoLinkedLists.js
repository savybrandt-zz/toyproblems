/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

var addTwoNumbers = function(l1, l2) {
    var traverse = function(node, num) {
        if(node === null) {
          return Number(num.reverse().join('')); 
        }
        num.push(node.val);
        return traverse(node.next, num);
    };
    var num1 = traverse(l1, []);
    var num2 = traverse(l2, []);
    var sum = (num1 + num2).toString();
    var result = new ListNode(Number(sum[sum.length-1]));

    for (var i = sum.length-2; i >= 0; i--) {
        var node = new ListNode(Number(sum[i]));
        var currentNode = result;
        while(currentNode.next) {
           currentNode = currentNode.next; 
        }
        currentNode.next = node;
    }
    return result;
};