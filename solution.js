const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
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
    let foundNode = this.search(data);

    node = this.getKth(this.searchKth(data)-1);
    node.next = foundNode.next;

  }

  search(key) {
    let node = this.head;

    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  searchKth(key) {
    let node = this.head;
    let counter = 0
    while (node !== null && node.data !== key) {
      counter++
      node = node.next;
    }
    return counter;
  }

   getLast() {
    let node = this.head;

    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  isEmpty(){
    return !this.head
  }
  toArray(){
    let arr = []
    let item = this.head
    while(item){
      arr.push(item.data)
      item = item.next
    }
    return arr
  }
  containsDuplicates(){
    const arr = this.toArray()
    const unique = [...new Set(arr)]
    return arr.length !== unique.length
  }
  getFirst() {
    return this.head;
  }
  clear() {
    this.head = null;
  }
  getKth(k){
    let item = this.head
    for (let index = 1; index < k; index++) {
      item = item.next
    }
    return item
  }
  getKthToLast(k){
    return this.getKth(this.size()-k)
  }
}

module.exports = {
  Node,
  LinkedList,
};
