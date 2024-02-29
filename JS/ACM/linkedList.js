class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(arr) {
    this.head = new Node(arr[0]);
    let cur = this.head;
    for (let i = 1; i < arr.length; i++) {
      cur.next = new Node(arr[i]);
      cur = cur.next;
    }
  }
  toString() {
    let cur = this.head;
    let str = "";
    while (cur) {
      str += cur.val + " -> ";
      cur = cur.next;
    }
    return str + "null";
  }
  getHead() {
    return this.head;
  }
}
