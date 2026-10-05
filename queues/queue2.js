class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(item) {
        this.items[this.rear] = item
        this.rear++
    }

    dequeue() {
        let item = this.items[this.front]
        delete this.items[this.front]
        this.front++ 
        return item
    }
}


const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue)

console.log(queue.dequeue())