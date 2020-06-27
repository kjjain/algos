function inOrderTraverse(tree, array){
    if(tree !== null){
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array);
    }
    return array;
}

function preOrderTraverse(tree, array) {
    if(tree !== null){
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right, array);
    }
    return array;
}

function postOrderTraverse(tree, array) {
    if(tree !== null){
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right, array);
        array.push(tree.value);
    }
    return array;
}

//In order traversal: Left, Root, Right

//PreOrder traversal: Root, left, Right

//PostOrder traversal: Left, Right, Root