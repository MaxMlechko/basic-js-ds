const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    let result = new ListNode
    let index = this.head
    result.value = this.elements[index]
    index++
    let current = result
    let next
    while(index < this.tail){
      next  = new ListNode
      next.value = this.elements[index]
      current.next = next
      current = next
      index++
    }
    current.next = null
    return result
  }

  enqueue(value) {
    this.elements[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
}

module.exports = {
  Queue
};
