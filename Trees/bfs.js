/**
 * 
 * BFS Traversal Approach
 * 
 * 1.Create a queue
 * 2. Enqueue the root node
 * 3. As long as node exists in the queue
 *    a. Dequeue the node from the front
 *    b. Read the node's value
 *    c. Enqueue the node's left child if it exists
 *    d. Enqueue the node's right child if it exists
 */


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BFS {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(root, value) {

        let newNode = new Node(value)
        if(this.isEmpty()) {
            this.root = newNode
        } else if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode
            } else {
               this.insert(root.left, newNode.value)
            }
        } else if(newNode.value > root.value) {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insert(root.right, newNode.value)
            }
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}

const bst = new BFS()

bst.insert(bst.root, 10)
bst.insert(bst.root, 5)
bst.insert(bst.root, 3)
bst.insert(bst.root, 7)
bst.insert(bst.root, 15)

console.log(bst)

bst.levelOrder()