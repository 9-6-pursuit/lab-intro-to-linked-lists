const { nums, words } = require("./data/data.js");


class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head =null){
    this.head = head
  }

  clear (){
    this.head = null
  }

  getFirst(){
    return this.head
  }

  insert(data){
    let newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }




  
}






module.exports = {
  Node,
  LinkedList,
};
