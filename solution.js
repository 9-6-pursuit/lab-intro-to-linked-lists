const { nums, words } = require("./data/data.js");

class Node {
  constructure(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insert (data) {
    let newNode = new Node(data)
    if(!this.head){
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
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next
    }
    return currentNode;
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode){
      count ++
      currentNode = currentNode.next
    }
    return count;
  }

  getKth(k){
    let currentNode = this.head
    for (i=0; i<k; i++){
      if(currentNode.next){
        currentNode = currentNode.next
      }else {
        return undefined
      }
    }
    return currentNode.data
  }

  clear() {
    return this.head = null
  }







}








module.exports = {
  Node,
  LinkedList,
};
