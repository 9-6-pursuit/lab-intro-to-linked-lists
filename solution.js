const { nums, words } = require("./data/data.js");

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(data) {
    if (!this.head) {
      return; // List is empty
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
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

  search(data) {
    let node = this.head;
    while (node.data !== data && node !== null) {
      node = node.next;
    }
    return node;
  }
  
  getKth(k) {
    let node = this.head;
    for (let i = k - 1; i > 0; i--) {
      node = node.next;
    }
    return node;
  }

  getKthToLast(k) {
    //  console.log(k)
    let node = this.head;
    let index = this.size() - k;
    for (let i = index - 1; i > 0; i--) {
      node = node.next;
    }
    //  console.log(node)
    return node;
  }

  isEmpty() {
    return this.head === null;
  }

  toArray() {
    let listArray = [];
    let node = this.head;
    while (node) {
      listArray.push(node.data);
      node = node.next;
    }
    return listArray;
  }

  clear() {
    this.head = null;
  }

  containsDuplicates() {
    let current = this.head;
    while (current !== null) {
      let runner = current.next;
      while (runner !== null) {
        if (current.data === runner.data) {
          return true; // Found a duplicate
        }
        runner = runner.next;
      }
      current = current.next;
    }
    return false; // No duplicates found
  }
}

module.exports = {
  Node,
  LinkedList,
};
