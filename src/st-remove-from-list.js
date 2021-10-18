const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList( l, k ) {
   let nodeList = l;
   
   if(!nodeList) {
     return null;
   }
   while (nodeList && nodeList.value === k) {
    nodeList = nodeList.next;
  }
    let currentNode = nodeList;
    if (currentNode !== null) {
      while (currentNode.next !== null) {
        if(currentNode.next.value === k) {
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  return nodeList;
}
