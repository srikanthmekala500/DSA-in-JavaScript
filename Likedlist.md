## Likedlist
```javascript 
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.data= null;
        this.size = 0

    }
    insertNode(data){
        const newnode = new Node(data)
        newnode.next = this.head
        this.head = newnode
    }
    insertArt(index,data){
        if(index < 0 || index >this.size){
            return "invalid Index"
        }
        if(index === 0){
            this.insertNode(data)
        }
        let  newnode = new Node(data)
        let temp = this.head
         for(let i = 0 ;i <index-1;i++){
                temp = temp.next;
         }
         newnode.next = temp.next
         temp.next = newnode
         this.size++
    }
    
    print (){
        let result = ''
        let temp = this.head
        while(temp){
            result += `${temp.data}-->`
            temp = temp.next
            this.size++
        }
        return result
    }
   
}

let list = new LinkedList()
list.insertNode(50)
list.insertNode(56)
list.insertNode(60)
list.insertArt(2,30)
console.log(list.print())
console.log(list)  
```
##  Middle of Linked List
```javascript 
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let middleNode = findMiddle(head);
console.log(middleNode.value);
```
## Reverse Linked List
```javascript 
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr !== null) {
        next = curr.next; // Save next node
        curr.next = prev; // Reverse the link
        prev = curr; // Move prev to current node
        curr = next; // Move to the next node
    }

    return prev;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let reversedHead = reverseList(head);

// Print reversed list
let node = reversedHead;
while (node !== null) {
    console.log(node.value); // Output: 5 4 3 2 1
    node = node.next;
}
```
## Merge Two Sorted Lists
```javascript 
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1); // Dummy node to simplify edge cases
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes of l1 or l2
    if (l1 !== null) {
        current.next = l1;
    } else if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next; // The merged list is after the dummy node
}

// Example usage:
let l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(5);

let l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);

let mergedHead = mergeTwoLists(l1, l2);

// Print merged list
let node = mergedHead;
while (node !== null) {
    console.log(node.value); // Output: 1 2 3 4 5 6
    node = node.next;
}
`````
## Remove Duplicates from Sorted list I && II
```javascript 
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function removeDuplicates(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.value === current.next.value) {
            current.next = current.next.next; // Skip the duplicate
        } else {
            current = current.next; // Move to the next node
        }
    }

    return head;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

let newHead = removeDuplicates(head);

// Print list after removing duplicates
let node = newHead;
while (node !== null) {
    console.log(node.value); // Output: 1 2 3
    node = node.next;
}
````
## Remove Duplicates from Sorted List II
```javascript 
This version removes all nodes that have duplicates, leaving only distinct numbers:
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function removeDuplicatesII(head) {
    let dummy = new ListNode(0, head); // Dummy node to handle edge cases
    let prev = dummy; // Previous non-duplicate node

    while (head !== null) {
        if (head.next !== null && head.value === head.next.value) {
            // Skip all nodes with the same value
            while (head.next !== null && head.value === head.next.value) {
                head = head.next;
            }
            prev.next = head.next; // Remove duplicates
        } else {
            prev = prev.next; // Move prev to the next non-duplicate node
        }
        head = head.next; // Move to the next node
    }

    return dummy.next; // The real head is after the dummy node
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

let newHead = removeDuplicatesII(head);

// Print list after removing all duplicates
let node = newHead;
while (node !== null) {
    console.log(node.value); // Output: 2
    node = node.next;
}
```
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/bda43d08-6224-429e-99e2-ba6634fbc143)
## Linked List Cycle I && II
```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next; // Create a cycle

console.log(hasCycle(head)); // Output: true
```
## Linked List Cycle II
```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function detectCycle(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;
    let isCycle = false;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            isCycle = true;
            break;
        }
    }

    if (!isCycle) {
        return null;
    }

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next; // Create a cycle

let cycleNode = detectCycle(head);
console.log(cycleNode.value); // Output: 2
```
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/0a6ebc8a-39c5-46f3-8cce-ea71796e06b6)
## Intersection of Two Linked Lists
```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    const nodesInB = new Set();

    // Traverse list B and store the address/reference of each node in the set
    let currentB = headB;
    while (currentB !== null) {
        nodesInB.add(currentB);
        currentB = currentB.next;
    }

    // Traverse list A and check if any node is in the set
    let currentA = headA;
    while (currentA !== null) {
        if (nodesInB.has(currentA)) {
            return currentA;
        }
        currentA = currentA.next;
    }

    return null;
}

// Example usage:
let headA = new ListNode(4);
headA.next = new ListNode(1);
let headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
let common = new ListNode(8);
common.next = new ListNode(4);
common.next.next = new ListNode(5);
headA.next.next = common;
headB.next.next.next = common;

let intersectionNode = getIntersectionNode(headA, headB);
console.log(intersectionNode ? intersectionNode.value : null); // Output: 8
```


