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
