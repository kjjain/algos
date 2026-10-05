class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newnode = new Node(value)
        if(this.isEmpty()) {
            this.root = newnode
        } else {

            //this is a recurrsive method to traverse and create the tree
            this.insertNode(this.root, newnode)
        }

    }

    insertNode(root, newNode) {
        if(newNode.value < root.value){
            if(root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(newNode.value > root.value) {
                if(root.right === null) {
                    root.right = newNode
                } else {
                    this.insertNode(root.right, newNode)
                }
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false
        } else {
            if(root.value === value) {
                return true
            } else if(value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        } 
    }
}


const bst = new BST()

console.log(`Tree is empty ${bst.isEmpty()}`)

bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(20)

console.log(bst.search(bst.root, 20))
console.log(bst.search(bst.root, 10))

console.log(`The BST `, bst)