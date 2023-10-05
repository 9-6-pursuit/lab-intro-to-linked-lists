const { nums, words } = require("./data/data.js");

// Define the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the end of the linked list
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Get the size (number of nodes) of the linked list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  deleteByKey(key) {
    if (!this.head) {
      return;
    }

    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === key) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
  getFirst() {
    return this.head ? this.head.data : null;
  }
  getLast() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }
  searchByKey(key) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }
  getKth(k) {
    if (k < 0) {
      return null;
    }

    let current = this.head;
    let count = 0;
    while (current) {
      if (count === k) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }
  getKthToLast(k) {
    if (k < 0) {
      return null;
    }

    let fast = this.head;
    let slow = this.head;

    // Move the fast pointer k nodes ahead
    for (let i = 0; i < k; i++) {
      if (fast) {
        fast = fast.next;
      } else {
        return null; // k is greater than the length of the list
      }
    }

    // Move both pointers until the fast pointer reaches the end
    while (fast && fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow ? slow.data : null;
  }
  containsDuplicates() {
    const valuesSet = new Set();
    let current = this.head;
    while (current) {
      if (valuesSet.has(current.data)) {
        return true;
      }
      valuesSet.add(current.data);
      current = current.next;
    }
    return false;
  }
}
module.exports = {
  Node,
  LinkedList,
};

