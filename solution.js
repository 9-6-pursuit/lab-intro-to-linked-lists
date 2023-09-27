const { nums, words } = require("./data/data.js");

class Node{
  constructor (data)  {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  insert (nodeData) {
    let newNode = new Node (nodeData)
    if(!this.head){
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count
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
    node.next = foundNode.next;
  }

  getFirst() {
    return this.head; 
  }
  
  getLast() {
    let node = this.head;
    if (!this.head) return null; //checks that the head is truthy
    while (node.next) {  // where node.next is the last node
      node = node.next;
    }
    return node;
  }
  
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    } 
    return node;
  }

  getKth (k) { 
    // gets the node number indicated by the value K
    let currentNode = this.head
    
    for (let i = 1; i <= k; i++) {
      if(i !== k){
        currentNode = currentNode.next
      } 
      return currentNode
    }
  }
  
  getKthToLast (k) { 
    let nodeSize = this.size()
    let currentNode = this.head
    
    for (let i = 1; i < nodeSize - k; i++) {
        currentNode = currentNode.next
      }
      return currentNode
  }

  isEmpty(){
    return this.head ? false : true
  }

  clear(){
    this.head = null
  }

  toArray() {
    const newArray = []
    let currentNode = this.head
    while (currentNode) {
      newArray.push(currentNode.data)
      currentNode = currentNode.next
    }
    return newArray; 
  }
  containsDuplicates(){
    const arr = this.toArray()
    const unique = [...new Set(arr)]
    return arr.length !== unique.length
  }
}
  
  let linkedListPanagram = new LinkedList()
  linkedListPanagram.insert("The")
console.log("linkedListPanagram: ", linkedListPanagram)



// Remove all duplicate nodes from a linked list, returning a new linked list with no duplicates. *** As Written By John Goodman

const removeDuplicatesFromLinkedList = (linkedList) => {
    let currentNode = linkedList.head
    let hashMap = {}
    let newLinkedList = new LinkedList ()
    while (currentNode) {
        if (!hashMap[currentNode.data]) {
            newLinkedList.insert(currentNode.data)
            hashMap[currentNode.data] = true
        }
        currentNode = currentNode.next
    }
    return newLinkedList
}




module.exports = {
  Node,
  LinkedList,
};
