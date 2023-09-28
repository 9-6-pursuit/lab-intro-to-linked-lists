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

    getFirst(){
      return this.head ? this.head.data : null;    
    }

    getLast(){
      if(!this.head) {
        return null;
      }

      let current =this.head;
      while(current.next){
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
      if (k < 0 || !this.head) {
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
      if (k < 0 || !this.head) {
        return null;
      }
  
      let slow = this.head;
      let fast = this.head;
  
      for (let i = 0; i < k; i++) {
        if (!fast.next) {
          return null;
        }
        fast = fast.next;
      }
  
      while (fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
  
      return slow.data;
    }
  
    isEmpty() {
      return !this.head;
    }
  
    clear() {
      this.head = null;
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      return result;
    }
  
    containsDuplicates() {
      const seen = new Set();
      let current = this.head;
      while (current) {
        if (seen.has(current.data)) {
          return true;
        }
        seen.add(current.data);
        current = current.next;
      }
      return false;
    }
}

module.exports = {
  Node,
  LinkedList,
};
