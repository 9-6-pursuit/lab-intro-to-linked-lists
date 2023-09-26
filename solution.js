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

  search(key) {
    let newNode = this.head;
    while(newNode !== null && newNode.data !== key){
      newNode = newNode.next
    }
    return newNode;
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
    for (let i=0; i<k; i++){
      if(currentNode.next){
        currentNode = currentNode.next
      }else {
        return undefined
      }
    }
    return currentNode.data
  }

  getKthToLast(k) {
    let length = this.size()
    return this.getKth(length - k -1)
  }

  clear() {
    return this.head = null;
  }

  delete(data) {
    let foundNode = this.head;
    let counter = 0
    while (foundNode.data !== data && foundNode.next){
      counter ++
      foundNode = foundNode.next
    }
    let prevNode = this.head;
    for (let i = 1; i < counter.length; i++) {
      prevNode = prevNode.next
    }
    return prevNode = foundNode.next
  }

  isEmpty() {
   return this.head ? false : true
  }

  toArray(linkedList) {
    let currentNode = this.head
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }
    return arr;
  }

  containsDuplicates(linkedList) {
    let newLinkedList = new LinkedList();
    let hashMap = {};
    let currentNode = this.head

    while(currentNode){
      if (hashMap[currentNode.data]){
        newLinkedList.insert(currentNode.data)
        hash[currentNode] = true
      }
      currentNode = currentNode.next
    }
    return !newLinkedList.head ? true : false;
  }


}








module.exports = {
  Node,
  LinkedList,
};
