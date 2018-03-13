'use strict';

class ListNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  static fromArray(items) {
    // Build the list up backwards.
    // Start by creating the last node that points to nothing.
    // Then make the second-to-last node and point it
    // to the last node.
    // Then make another node and point it to the second-to-last node.
    // Do this until the list is entirely built up.

    let previousNode = null
    for (var i = items.length - 1; i >= 0; i--) {
      let node = new ListNode(items[i]);
      node.next = previousNode;
      previousNode = node;
    }
    // set the root to point to the last node added at the front of the chain.
    let list = new LinkedList();
    list.root = previousNode;
    return list;
  }

  // you get this method for free.
  toString() {
    let result = 'root';
    let current = this.root;
    while(current) {
      result += ' -> ' + current.value;
      current = current.next;
    }
    return result + ' -> null';
  }

  isEmpty() {
    if(this.root === null || this.root === undefined) {
      return true;
    } 
    return false;
  }

  size() {
    let current = this.root;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  append(value) {
  }

  prepend(value) {
    let node = new ListNode(value);
    node.next = this.root;
    this.root = node;
  }

  remove(value) {
    // rewrite the root node if the value is at the front.

    // start at the front
    // look for a node that points to the node we want to remove.

    // save the result
    // make the current node point to the node after the node we're removing
  }

  find(value) {
  }

  hasCycle() {
  }

  reverse() {
  }

  getMiddle(list) {
  }

  getNthFromLast(n) {
    // make two pointers and start them at the front.

    // move the offset pointer N nodes forward

    // now move both nodes forward simultaneously.
    // When the offset node hits the end of the list
    // the nBehind node will be N nodes from the end of the list.
  }

  getLast() {
    return this.getNthFromLast(0);
  }
  getSecondFromLast() {
    return this.getNthFromLast(1);
  }
  getThirdFromLast() {
    return this.getNthFromLast(2);
  }

  getNth(n) {
    // step forward N times.
  }

  getFirst() {
  }

  getSecond() {
  }

  getThird() {
  }

  forEach(cb) {
  }

  map(cb) {
  }

  filter(cb) {
  }

  reduce(cb, initial) {
  }
}

module.exports = {LinkedList, ListNode}
