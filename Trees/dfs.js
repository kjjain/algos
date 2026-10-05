//Preorder
//Inorder
//Postorder


//Preorder
//Read root data
//Read left sub-tree
//Read right sub-tree

//Inorder
//Read left sub-tree
//Read root data
//Read right sub-tree

//PostOrder
//Read left sub-tree
//Read right sub-tree
//Read root data

/** 
             5
            / \
           2   15
            \    \
             4    20
            /
           3
*/           


//Preorder -> 5,2,4,3,15,20
//Inorder -> 2, 3, 4, 5, 15, 20 //Produces the BST in sorted order
//PostOrder -> 3, 4, 2,15, 20, 5

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

    preOrder(root) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    //Left of the root is less value, iterate to left, till we reach the left leaf node
    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    //right of the root is higher value, iterate to the right till we reach the right leaf node
    max(root) {
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
}


const bst = new BST()

console.log(`Tree is empty ${bst.isEmpty()}`)

bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(4)
bst.insert(3)
bst.insert(20)

console.log(bst.search(bst.root, 20))
console.log(bst.search(bst.root, 10))

bst.preOrder(bst.root)

console.log(`The BST `, bst)