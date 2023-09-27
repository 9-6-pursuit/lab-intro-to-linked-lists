const { Link } = require("react-router-dom");
const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }
  insert(data) {
    let newNode = new Node(data)
    if(!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
    node = node.next;
    }
    return node;
    }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }
  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  clear() {
    this.head = null;
  }
  getKth(k) {
  let currentNode = this.head
  for(let i = 1; i < k; i++) {
      if(currentNode.next) {
          currentNode = this.head.next
      } else {
          return undefined
      }
  }
  return currentNode
  }
getKthToLast(k) {
  let getSize = this.size()
  let node = this.head
  for (let i = 1; i < getSize - k; i++) {
    node = node.next
  }
  return node
  }
isEmpty() {
  return !this.head
  }
toArray() {
  let array = []
  let item = this.head
  while(item) {
    array.push(item.data)
    item = item.next
  } 
  return array
}
containsDuplicates() {
  const arr = this.toArray()
  const unique = [...new Set(arr)]
  return arr.length !== unique.length
}

}



module.exports = {
  Node,
  LinkedList,
};
