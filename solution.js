const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
 
  insert(data) {
    const newNode = new Node(data);
    if(!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

    size(){
      let count = 0;
      let current = this.head;
      while(current){
        count++
        current = current.next
      }
      return count;
    }

    deleteByKey(key) {
      if(!this.head){
        return;
      }

      if (this.head.data === key) {
        this.head = this.head.next;
        return;
      }

      let current = this.head;
      while (current.next) {
        if(current.next.data === key){
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
}

module.exports = {
  Node,
  LinkedList,
};
