class Node {
    constructor(value) {
        this.val = value
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    append(val) {
        let node = new Node(val)

        if(this.head === null) {
            this.head = node
            this.size++
            return
        }
        let curr = this.head

        while(curr.next) {
            curr = curr.next
            this.size++
        }
        curr.next = node
        return this.size
    }

    isEmpty() {
        if(this.size === 0) {
            return true
        }
    }

    // n0  n1 -> n2 -> n3

    print() {
        if(this.isEmpty()){
            console.log('The linkedList is Empty')
        }
        else {
            let curr = this.head
            while(curr) {
                console.log(curr.val)
                curr = curr.next
            }
        }
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
        }
        let curr = this.head
        this.head = node
        node.next = curr
        this.size++
    }

    search(index) {
        if(this.isEmpty()){
            return -1
        }

        let i=0;
        let curr = this.head
        while(curr){
            if(i === index){
              return curr.val
            }
            i++;
            curr = curr.next
        }
        return -1
    }

    searchByValue(val){
        if(this.isEmpty()){
            return false
        }

        let curr = this.head
        while(curr) {
            if(curr.val === val){
                return true
            }
            curr = curr.next
        }
        return false
    }

    removeNode(val) {
        //n1 -> n2 -> n3
        if(this.isEmpty()) {
            console.log('LinkedList is Empty')
            return
        }

        if(this.head.val === val) {
            this.head = this.head.next
            this.size--;
            return
        } 

        let curr = this.head

        while (curr.next && curr.next.val !== val) {
            curr = curr.next
        }

        // Value was not found
        if (curr.next === null) {
            return
        }

        // Remove the node
        curr.next = curr.next.next
        this.size--
        return val
    }

    reverse() {
        if(this.isEmpty()){
            console.log('LinkedList is Empty')
            return
        }

        let prev = null
        let curr = this.head

        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}

let linkedList = new LinkedList()

linkedList.append(10)
linkedList.append(20)
linkedList.append(30)
linkedList.prepend(5)

linkedList.print()
// console.log(linkedList.search(3))
// console.log(linkedList.searchByValue(10))
console.log(" Remove Node " + linkedList.removeNode(20))
linkedList.append(40)
linkedList.append(50)
linkedList.print()

console.log("Reverse the linked List")
linkedList.reverse()
linkedList.print()
