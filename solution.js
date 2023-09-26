const { nums, words } = require("./data/data.js");

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }
  
  insert (data) {
    let node = new Node (data)
    if(!this.head) {
      this.head = node
    }else{
      node.next = this.head 
      this.head = node
    }
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

  delete(data) {
    let node = this.head;
    while (node.next.data !== data) {
      node = node.next;
    }
    node.next = node.next.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  search(data) {
    let node = this.head;
    while (node) {
      if (node.data === data) {
        return node;
      }
      node = node.next;
    }
  }

  getKth(k) {
    let node = this.head;
    let order = 1;
    while (node) {
      if ((k = order)) {
        return node;
      }
      node = node.next;
      order++;
    }
  }

  getKthToLast(k) {
    let node = this.head;
    let order = 1;
    let size = this.size();
    while (node) {
      if (order === size - k) {
        return node;
      }
      order++;
      node = node.next;
    }
  }

  isEmpty() {
    return !this.head;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  containsDuplicates() {
    const uniqueArr = [];
    let node = this.head;
    while (node) {
      if (uniqueArr.includes(node.data)) {
        return true;
      }
      uniqueArr.push(node.data);
      node = node.next;
    }
    return false;
  }
}

const node = new Node("2");
const list = new LinkedList(node);
for (let num of nums) {
  list.insert(num);
}

console.log(list.containsDuplicates());


module.exports = {
  Node,
  LinkedList,
};
