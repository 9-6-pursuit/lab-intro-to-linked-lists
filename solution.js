const { nums, words } = require("./data/data.js");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//create nodes
const firstNode = new Node(1);
const secondNode = new Node(2);
firstNode.next = secondNode;
//console.log(firstNode);

//linked list blueprint
class LinkedList {
  constructor(head = null) {
    this.head = head;
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
  clear() {
    this.head = null;
  }
  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
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
    //the next node has the value of the next node after foundnode
    node.next = foundNode.next;
  }
  getFirst() {
    return this.head;
  }
  getKth(k) {
    let currentNode = this.head;
    for (let i = 0; i < k; i++) {
      if (currentNode.next) {
      } else {
        return undefined;
      }
    }
    return currentNode;
  }
  getKthToLast(k){
    let getSize = this.size();
    let node = this.head;
    for (let i = 1; i < getSize - k; i++){
      node = node.next;
    }
    return node;
  }
  isEmpty(){
    return !this.head;
  }
  toArray(){
    let arr = [];
    let item = this.head;
    while (item){
      arr.push(item.data);
      item = item.next
    }
    return arr;
  }
  containsDuplicates(){
    let arr = this.toArray();
    let unique = [...new Set(arr)];
    return arr.length !== unique.length;
  }
}
module.exports = {
  Node,
  LinkedList,
};
