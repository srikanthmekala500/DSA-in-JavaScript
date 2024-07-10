 ![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/b8ba3b47-44a7-4a30-b860-77e24df79e48)

## What is Queue Data Structure?
Queue Data Structure is a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

We define a queue to be a list in which all additions to the list are made at one end (back of the queue), and all deletions from the list are made at the other end(front of the queue).  The element which is first pushed into the order, the delete operation is first performed on that.

![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/171adda2-06a7-4159-9dba-313a5f16ed65)
## Real-Life Queue in Data Structure Example
Let’s consider a queue in data structure example. A line of people is waiting to buy a ticket at a cinema hall. A new person will join the line from the end, and the person standing at the front will be the first to get the ticket and leave the line. Similarly, in a queue data structure, data added will leave the queue first.

## Some other applications of the queue in real life are:
* People on an escalator
* Cashier line in a store
* A car wash line
* One way exits
## Basic Queue Operations in Queue Data Structure
## Operation 	   ## Description 
* enqueue() 	   > Process of adding or storing an element to the end of the queue
* dequeue()	    > Process of removing or accessing an element from the front of the queue 
* peek()        > Used to get the element at the front of the queue without removing it
* initialize()	 > Creates an empty queue
* isfull()	     > Checks if the queue is full
* isempty()	    > Check if the queue is empty
* 
## Queue Implementation Using Array
```javascript 
class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        return this.isEmpty() ? null : this.queue.shift()
    }

    front(){
        return this.isEmpty() ? null : this.queue.at(0)
    }

    back(){
        return this.isEmpty() ? null : this.queue.at(-1)
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    size(){
        return this.queue.length
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue()) // 1
console.log(queue.front()) // 2
console.log(queue.back()) // 3
console.log(queue.isEmpty()) // false
console.log(queue.size()) // 2
console.log(queue) // Queue { queue: [2, 3]}
```
## Queue Implementation Using Linked List
```javascript 
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data){
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
        } else{
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }

        const deletedItem = this.head.data;
        this.head = this.head.next;
        this.size--;
        return deletedItem;
    }

    front(){
        return this.isEmpty() ? null : this.head.data;
    }

    back(){
        return this.isEmpty() ? null : this.tail.data;
    }

    isEmpty(){
        return this.size === 0;
    }
}

const queue1 = new QueueLinkedList()
queue1.enqueue(5)
queue1.enqueue(6)
queue1.enqueue(7)
console.log(queue1.dequeue()) // 5
console.log(queue1.front()) // 6
console.log(queue1.back()) // 7
console.log(queue1.size) // 2
console.log(queue1) 
/* QueueLinkedList 
{ 
    head: Node { data: 6, next: Node { data: 7, next: null }}, 
    tail: Node{data: 7, next: null}, 
    size: 2
}
*/
```
## Implement Queue Using Stacks
```javascript
class QueueUsingStacks {
    constructor() {
        this.stack1 = []; // Main stack for enqueue operation
        this.stack2 = []; // Temporary stack for dequeue operation
    }

    // Add element to the queue
    enqueue(value) {
        this.stack1.push(value);
    }

    // Remove and return element from the queue
    dequeue() {
        // If stack2 is empty, transfer all elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        
        // Pop from stack2 to get the oldest element (first inserted)
        return this.stack2.pop();
    }

    // Peek at the front element of the queue without removing it
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        
        // Return the element on top of stack2 (oldest element)
        return this.stack2[this.stack2.length - 1];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.stack1.length + this.stack2.length;
    }
}
let queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.size());    // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.enqueue(4);
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
console.log(queue.isEmpty()); // Output: true
```
## Design Circular Queue
```javascript
class MyCircularQueue {
    constructor(k) {
        this.capacity = k;
        this.queue = new Array(k).fill(null);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    // Insert an element into the circular queue
    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
        return true;
    }

    // Delete an element from the circular queue
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    // Get the front item from the queue
    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.front];
    }

    // Get the last item from the queue
    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.rear];
    }

    // Checks whether the circular queue is empty or not
    isEmpty() {
        return this.size === 0;
    }

    // Checks whether the circular queue is full or not
    isFull() {
        return this.size === this.capacity;
    }
}
let obj = new MyCircularQueue(3);

console.log(obj.enQueue(1)); // Output: true
console.log(obj.enQueue(2)); // Output: true
console.log(obj.enQueue(3)); // Output: true
console.log(obj.enQueue(4)); // Output: false (queue is full)

console.log(obj.Rear());     // Output: 3
console.log(obj.isFull());   // Output: true

console.log(obj.deQueue());  // Output: true
console.log(obj.enQueue(4)); // Output: true

console.log(obj.Rear());     // Output: 4
````
## Number of Recent Calls
```javascript
class RecentCounter {
    constructor() {
        this.queue = [];
    }
    
    ping(t) {
        this.queue.push(t);
        // Remove elements from the front of the queue that are outside the 3000 ms window
        while (this.queue[0] < t - 3000) {
            this.queue.shift();
        }
        return this.queue.length;
    }
}

let obj = new RecentCounter();
console.log(obj.ping(1)); // Output: 1
console.log(obj.ping(100)); // Output: 2
console.log(obj.ping(3001)); // Output: 3
console.log(obj.ping(3002)); // Output: 3
````
