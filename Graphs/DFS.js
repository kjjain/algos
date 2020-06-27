

class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }


    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }


    //Time: O(vertices + edges) | space: O(vertices)
    depthFirstSearch(array) {
        array.push(this.name);
        for(const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}


/**
 *
 *                  A
 *                 /\  \
 *                B  C  D
*                /\      \
 *              E  F      G
 *                / \     /\
*                I   J   H  K
 *
 *             DFS Traversal: ABEFIJCDGHK
 *
 *
 * **/