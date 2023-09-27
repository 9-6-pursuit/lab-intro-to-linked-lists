const { nums, words } = require("./data/data.js");

// Lab requirements:
  // Linked List Methods
      // insert
      // size
      // delete by key
      // getFirst element
      // getLast element
      // search an element by key and return data
      // getKth retrieve kth element
      // getKthToLast retrieve kth from last element
      // isEmpty check if list is empty
      // clear the linked list
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

   // =========== delete data =================

   delete(data) {
    let node=this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
        counter++;
        node = node.next;
    }
    let foundNode = nonde;
    node = this.head;
    for (let i=1; i<counter; i++) {
        node = node.next;
    }
    node.next = foundNode.next;
  }
  
  clear(){
    this.head = null;
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
      let currentNode = this.head;
      for (let i=0; i<k; i++){
          if (currentNode.next) {
              currentNode = currentNode.next;
          } else {
          return undefined
          }
      }
      return currentNode;
  }


  getKthFromLast(k){
      // let length = this.getLength();
      // return this.getKth = length-k
      // let kth = this.getKth();
      //get the element that is k from last. So that would be length. Then length -1 and then -2 and so on until -k.
      return this.getKth(this.getLength() -k-1)
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


