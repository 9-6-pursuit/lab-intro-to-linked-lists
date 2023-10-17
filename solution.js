const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    let currentNode = this.head;
    let newNode = new Node(data);

    !currentNode
      ? (this.head = newNode)
      : (newNode.next = currentNode) && (this.head = newNode);
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete(data) {
    if (!this.head) {
      return console.log("List is Empty!");
    }

    let currentNode = this.head;
    let count = 0;

    while (currentNode.data !== data && currentNode.next) {
      count++;
      currentNode = currentNode.next;
    }

    let foundNode = currentNode;
    currentNode = this.head;

    for (let i = 1; i < count; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = foundNode.next;
  }

  getFirst() {
    return !this.head ? null : this.head;
  }

  getLast() {
    if (!this.head) {
      console.log("This List Is Empty");
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === key) return currentNode;
      currentNode = currentNode.next;
    }
  }

  getKth(k) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      return k - 1 === count
        ? currentNode
        : count++ && (currentNode = currentNode.next);
    }
  }

  getKthToLast(k) {
    let currentNode = this.head;
    let size = this.size();
    let last = size - k;

    for (let i = 1; i < last; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  isEmpty() {
    return this.head ? false : true;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    if (this.head === null) return "This List Is Empty";

    let currentNode = this.head;
    let nodeArray = [];

    while (currentNode) {
      nodeArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodeArray;
  }

  containsDuplicates() {
    let nodeArray = this.toArray();
    let count = {};

    for (const node of nodeArray) {
      if (count[node]) {
        count[node]++;
        return true;
      } else {
        count[node] = 1;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
