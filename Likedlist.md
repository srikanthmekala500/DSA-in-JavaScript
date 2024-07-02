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
A JavaScript ### Set is a collection of unique values.
Each value can only occur once in a Set.
The values can be of any type, primitive values or objects.
The ## has() method of Map instances returns a boolean indicating whether an element with the specified key exists in this map or not.

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
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/6695c5fd-3dd4-46ad-876d-8b405144d1f3)
## Finding Next Greater Node in Linked List
```javascript

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function nextLargerNodes(head) {
    let result = [];
    let stack = [];
    let index = 0;
    let current = head;

    // Traverse the linked list
    while (current !== null) {
        // While stack is not empty and the current value is greater than
        // the value at the top of the stack, update the result for the index
        while (stack.length > 0 && stack[stack.length - 1][1] < current.value) {
            let [idx, val] = stack.pop();
            result[idx] = current.value;
        }

        // Push the index and value to the stack
        stack.push([index, current.value]);
        result.push(0); // Initialize the result for this index with 0
        index++;
        current = current.next;
    }

    return result;
}

// Example usage:
let head = new ListNode(2);
head.next = new ListNode(1);
head.next.next = new ListNode(5);

console.log(nextLargerNodes(head)); // Output: [5, 5, 0]
````
## Remove Zero Consecutive Nodes from Linked List
```javascript
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function removeZeroSumSublists(head) {
    let dummy = new ListNode(0); // Create a dummy node to handle edge cases
    dummy.next = head;
    let prefixSum = 0;
    let map = new Map();
    map.set(0, dummy); // Initialize the map with sum 0 pointing to the dummy node

    // First pass: Calculate prefix sums and store them in the map
    for (let current = dummy; current !== null; current = current.next) {
        prefixSum += current.value;
        map.set(prefixSum, current);
    }

    // Second pass: Reset the prefix sum and remove zero-sum sublists
    prefixSum = 0;
    for (let current = dummy; current !== null; current = current.next) {
        prefixSum += current.value;
        current.next = map.get(prefixSum).next; // Skip the zero-sum sublist
    }

    return dummy.next; // Return the head of the modified list
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(-3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);

let newHead = removeZeroSumSublists(head);

// Print the modified list
let node = newHead;
while (node !== null) {
    console.log(node.value); // Output: 3, 1
    node = node.next;
}
```
The provided solution makes use of the prefix sum concept and a hash table to efficiently find and remove zero-sum consecutive sequences in the linked list. Here's how the implementation unfolds:

We initialize a dummy node that acts as a pre-head, ensuring we can handle cases where the head itself might be part of a zero-sum sequence. This dummy node points to the original head of the list.
dummy = ListNode(next=head)
We declare a hash table last to record the last node for each unique prefix sum observed. The hash table is indexed by the prefix sum and contains the corresponding node as its value.

Starting from the dummy node (pre-head), we iterate through the linked list to calculate the prefix sum s for each node. As we compute the prefix sum, we update the last hash table with the current node. If the same sum occurs again later, it overwrites the previous node, since we only need the latest one.

s, cur = 0, dummy
while cur:
    s += cur.val
    last[s] = cur
    cur = cur.next
After populating the last table, we iterate the list again, starting from the dummy node, to update the next pointers. For each node, as we calculate the prefix sum s, we find the node corresponding to this sum in the last table, and we set the current node’s next pointer to last[s].next. This effectively skips over and removes any nodes part of a zero-sum sequence found between the two nodes with equal prefix sums.
s, cur = 0, dummy
while cur:
    s += cur.val
    cur.next = last[s].next
    cur = cur.next
Finally, we return dummy.next — the head of the modified list, which no longer contains any sequence of nodes that sum up to 0.
The two primary components used in the solution are:

Prefix Sum: This technique is critical to discover sequences that total to 0. By keeping track of the cumulative sum at each node, we can swiftly identify regions of the list that cancel each other out.
Hash Table: By storing the last occurrence of a node for a given prefix sum, we have the ability to quickly jump over sequences that sum to 0. This is because if a prefix sum repeats, the sum of the nodes between those repetitions is necessarily 0.
## Reverse Linked List II	
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/bce4f6d3-6e48-4b8d-93d1-20f8a30d1e2a)
```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseBetween(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move `prev` to the node just before the `left` position
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let start = prev.next; // `start` will point to the first node of the sublist to be reversed
    let then = start.next; // `then` will point to the node that will be reversed

    // Reverse the sublist
    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
}

// Helper function to print the linked list
function printList(head) {
    let curr = head;
    while (curr) {
        process.stdout.write(curr.val + ' -> ');
        curr = curr.next;
    }
    console.log('null');
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log('Original list:');
printList(head);

let left = 2, right = 4;
head = reverseBetween(head, left, right);

// console.log(`Reversed list from position ${left} to ${right}:`);
printList(head);
````
## Odd Even Linked list
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/58d43b16-3037-4984-a74f-5a6ddd23cdff)
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
 
var oddEvenList = function(head) {
    if (!head) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
printLinkedList(head);

head = oddEvenList(head);

console.log("Odd Even list:");
printLinkedList(head);
````
## Swap Nodes in Pairs	
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/b9852a9e-d46b-4a7d-95cd-337fe79a7f24)
Input: head = [1,2,3,4]
Output: [2,1,4,3]
````javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Example usage
let head = arrayToList([1, 2, 3, 4]);
head = swapPairs(head);
console.log(listToArray(head)); // Output: [2, 1, 4, 3]
````
### Reorder List	
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/cda8c640-256b-45e3-b249-0e4d5d2b2724)
Input: head = [1,2,3,4]
Output: [1,4,2,3]

```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reorderList(head) {
    if (!head || !head.next) {
        return;
    }

    // Step 1: Find the middle of the list using slow and fast pointers
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    let curr = slow.next;
    slow.next = null; // break the list into two halves
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // Step 3: Merge the two halves
    let first = head;
    let second = prev;
    while (second) {
        let nextFirst = first.next;
        let nextSecond = second.next;
        first.next = second;
        second.next = nextFirst;
        first = nextFirst;
        second = nextSecond;
    }
}

// Helper function to create a linked list from an array
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Example usage
let head = arrayToList([1, 2, 3, 4, 5]);
reorderList(head);
console.log(listToArray(head)); // Output: [1, 5, 2, 4, 3]
```
