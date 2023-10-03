const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
} 

class LinkedList{
  constructor(head = null){
    this.head = null
  }

  insert(data){
    let newNode = new Node (data);
    newNode.next = this.head;
    this.head = newNode
  }

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++
      node = node.next
    }
    return count
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while(node.data !== data && node.next){
      counter++;
      node = node.next
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++){
      node = node.next
    }
    node.next = foundNode.next
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let node = this.head;
    while(node.next){
      node = node.next
    }
    return node;
  }

  search(k){
    let node = this.head;
    while(node !== null && node.data !== k){
      node = node.next
    }
    return node;
  }

  getKth(k){
    let node = this.head
    let count = 1
    while (node && count !== k){
      count++
      node = node.next
    }
    return node
  }

  getKthToLast(k){
    let getSize = this.size()
    let node = this.head
    for(let i = 1; i < getSize - k; i++){
      node = node.next
    }
    return node
  }

  isEmpty(){
    return this.head === null
  }

  clear(){
    return this.head = null
  }

  toArray(){
    let arr = []
    let node = this.head
    while(node){
      arr.push(node.data);
      node = node.next
    }
    return arr
  }

  containsDuplicates(){
    const arr = this.toArray()
    const unique = [... new Set(arr)];
    return arr.length !== unique.length
  }
}

module.exports = {
  Node,
  LinkedList,
};
