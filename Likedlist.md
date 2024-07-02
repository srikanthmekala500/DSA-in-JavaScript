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
