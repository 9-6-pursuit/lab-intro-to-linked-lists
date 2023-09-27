const { nums, words } = require("./data/data.js");

// Lab requirements:
  // Linked List Methods

      // toArrayconvert data from linked list to an array
      // containsDuplicates check for duplicates - return true if contains duplicates, false if not
class Node {
  constructor (data) {
      this.data = data
      this.next = null
  }
}

class LinkedList {
  constructor(){
      this.head = null;
  }

  insert (data) {
      let newNode = new Node (data)
      if (!this.head) {
          this.head = newNode
      } else {
          newNode.next = this.head  //whatever was the head is now next
          this.head = newNode; //now we change the head to the new thing
      }

  }

  size(){
    let count = 0;
    let node = this.head;
    while (node) {
        count++;
        node = node.next;
    }
    return count
  }

  getLength(){
    let count = 0;
    let currentNode = this.head;
    while(currentNode){
        count++;
        currentNode = currentNode.next;
    }
    return count;
  }

   delete(key) {
    let node=this.head;
    let counter = 0;
    while (node.key !== key && node.next) {
        counter++;
        node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i=1; i<counter; i++) {
        node = node.next;
    }
    node.next = foundNode.next;
  }
  
  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;{   //optional
        this.head = head;
    }
    while (node.next) {
        node = node.next;
    }
    return node;
  }

  search(key) {
    let node = this.head;
    while (node.data !== key) {
        node = node.next;
    }
    return node;
  }

  getKth(k){
    let count=1;
    let node=this.head;
    while(count !== k) {
      count++
      node=node.next;
    }
    return node;
  }

  getKthToLast(k){
      let getSize = this.size();
      let node = this.head
      for (let i=1; i <getSize-k; i++){
        node=node.next;
      }
      return node;
  }

  isEmpty(){
    return !this.head
  }

  clear(){
    this.head = null;
  }

  toArrayconvert (){
    
  }

  removeDuplicates(){

  }
}





// const firstList = new LinkedList(firstNode);

// let previousNode = new Node ("Jan");
// let list = new LinkedList(previousNode);
// for (let i=0; i<months.length; i++){
// let currentNode = new Node(months[i]);
// previousNode.next = currentNode;
// previousNode = currentNode
// }


// const { inspect } = require("util");
// console.log(inspect(list, { showHidden: true, colors: true, depth: 12 }));




module.exports = {
  Node,
  LinkedList,
};


