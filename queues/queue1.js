class Queue {

    constructor() {
        this.items =[]
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        return this.items[0]
    }
}


const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)

queue.enqueue(30)

console.log(queue)

console.log(queue.dequeue())
console.log(queue.peek())
