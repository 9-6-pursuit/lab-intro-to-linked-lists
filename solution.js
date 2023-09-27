const { nums, words } = require("./data/data.js");


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the beginning of the linked list
  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Append a new node at the end of the linked list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Delete the first occurrence of a node with the given data
  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Find a node with the given data
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null; // Node with data not found
  }

  // Get the length (number of nodes) of the linked list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Get the first node in the linked list
  getFirst() {
    return this.head;
  }

  // Get the last node in the linked list
  getLast() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

  // Check if the linked list is empty
  isEmpty() {
    return !this.head;
  }

  // Clear (empty) the linked list
  clear() {
    this.head = null;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  // Check for duplicates in the linked list
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


  // Find an element by key
search(data) {
  let current = this.head;
  while (current) {
    if (current.data === data) {
      return current;
    }
    current = current.next;
  }
  return null; // Node with data not found
}

// Retrieve kth element
// getKth(k) {
//   if (k < 0) {
//     return null; // Invalid index
//   }
//   let current = this.head;
//   let index = 0;
//   while (current) {
//     if (index === k) {
//       return current;
//     }
//     current = current.next;
//     index++;
//   }
//   return null; // Index out of bounds
// }

getKth(k) {
  let count = 1;         // Initialize a counter to 1
  let node = this.head;  // Start from the head of the linked list

  // Continue looping until we reach the k-th node or the end of the list
  while (node && count !== k) {
    count++;            // Increment the counter
    node = node.next;   // Move to the next node in the list
  }

  return node;           // Return the k-th node or null if not found
}


// Retrieve kth from last element
getKthToLast(k) {
  if (k < 0) {
    return null; // Invalid index
  }
  let slow = this.head;
  let fast = this.head;

  // Move the fast pointer k nodes ahead
  for (let i = 0; i < k; i++) {
    if (!fast) {
      return null; // Index out of bounds
    }
    fast = fast.next;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

}

module.exports = {
  Node,
  LinkedList,
};




