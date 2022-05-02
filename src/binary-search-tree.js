const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    this.treeRoot = adding(this.treeRoot, data)

    function adding(node, data){
      if(!node){
        return new Node(data)
      }

      if(node.data == data){
        return node
      }

      if(data < node.data){
        node.left = adding(node.left, data)
      } else{
        node.right = adding(node.right, data)
      }

      return node
    }
  }

  has(data) {

    return searchData(this.treeRoot, data)

    function searchData(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return data < node.data ? searchData(node.left, data) : searchData(node.right, data)
    }
  }

  find(data) {

    return searchData(this.treeRoot, data)

    function searchData(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }
      
      return data < node.data ? searchData(node.left, data) : searchData(node.right, data)
    }
  }

  remove(data) {
    this.root = removeNode(this.treeRoot, data)
    
    function removeNode(node, data) {
    if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data

        node.right = removeNode(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.treeRoot) {
      return
    }

    let node = this.treeRoot
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.treeRoot) {
      return
    }

    let node = this.treeRoot
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};