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
    let previousNode = null;
    for (var i = items.length - 1; i >= 0; i--) {
      let node = new ListNode(items[i]);
      node.next = previousNode;
      previousNode = node;
    }
    let list = new LinkedList();
    list.root = previousNode;
    return list;
  }

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
    if (this.root === null) {
      this.root = new ListNode(value, null);
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.next === null) {
          currentNode.next = new ListNode(value, null);
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }

  prepend(value) {
    let node = new ListNode(value);
    node.next = this.root;
    this.root = node;
  }

  remove(value) {
  }

  find(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  hasCycle() {
  }

  reverse() {
    let newList = new LinkedList();
    let currentNode = this.root;
    while (currentNode) {
      newList.prepend(currentNode.value);
      currentNode = currentNode.next;
    }
    this.root = newList.root;
  }

  getMiddle(list) {
  }

  getNthFromLast(n) {
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
