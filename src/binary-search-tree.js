const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
     this.Root = null; 
    }

  root() {
    return this.Root
  }

  add(data) {
    let newNode = new Node(data);
    if (this.Root === null) {
        this.Root = newNode;
    } else {
        insertNode(this.Root, newNode); 
    }

function insertNode (Node, newNode) {
    if (newNode.data < Node.data) {
        if (Node.left === null) {
            Node.left = newNode;
        } else {
            insertNode(Node.left, newNode);
        }
    } else {
        if (Node.right === null) {
            Node.right = newNode;
        } else {
            insertNode(Node.right, newNode);
        }
    }
}
  }

  has(data) {
 function hasData(Node) {
      if (Node === null) {
        return false;
      } 
       if (data === Node.data) {
        return true;
      } 
       if (data > Node.data){
        return hasData(Node.right)
      }
      return hasData(Node.left)
    }
    return hasData(this.Root)
}
  

  find(data) {
  function  search (Node, data) {
      if (Node === null) {
          return null;
      }
       if (data === Node.data) {
          return Node;
      } 
      if (data > Node.data) {
          return search(Node.right, data);
      } 
        return search(Node.left, data);
      } 
        return search(this.Root, data)
      }
    
    
  

   remove(data) {
    
  }

  min() {
    let Min = findMin(this.Root);
    function findMin(node) {
    if (node.left === null)
          return node;
      else
          return findMin(node.left);
  }
  return Min.data
}

  max() {
    let Max = findMax(this.Root)
    function findMax(node) {
    if (node.right === null)
          return node;
      else
          return findMax(node.right);
  }
  return Max.data
  }

}