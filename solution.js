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
    if(!this.head){
      newNode.next = this.head
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode 
    } 
  }

  getLast (){
    let node = this.head
      while(this.next){
        node = this.next
      }
      return node
  }

  size (){
    let count =0
    let node = this.head
    while(node){
      count ++
      node = node.next
    }
    return count
  }

isEmpty(){
  return !this.head
}

toArray(){
  const newArray = []
  let currentNode = this.head
  while(currentNode){
    newArray.push(currentNode.data)
    currentNode= currentNode.next
  }
  return newArray
}

search(key){
  let node = this.head
  while(node !== null && node.data !== key){
    node = node.next
  }
  return node
}

getKth (k){
  let currentNode = this.head
  for(let i =1; i <= k; i++){
    if(i !== k){
      currentNode = currentNode.next
    }
  }
  return currentNode
}

getKthToLast(k){
  let nodeSize = this.size()
  let currentNode = this.head
  for(let i =1; i <nodeSize-k; i++){
    currentNode = currentNode.next
  }
  return currentNode
}

containsDuplicates(){
  const arr = this.toArray()
  const unique = [...new Set(arr)]
  return arr.length !==unique.length
}

delete(data){
  let node = this.head
  let counter = 0
  while(node.data !== data && node.next){
    counter++
    node = node.next
  }
//incomplete

}

}






module.exports = {
  Node,
  LinkedList,
};
