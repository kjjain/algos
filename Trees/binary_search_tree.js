class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        //If the current value is less than existing value
        if (value < this.value) {
            //If no left node, insert new node
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                //else insert in left node
                this.left.insert(value);
            }

            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
            return this;
        }
    }


    //Search Average: O(log(n)) time  |  O(log(n)) space
    // worst: O(n) time O(n) space
    contains(value){
        if(value < this.value){
            if(this.left === null){
                return false;
            } else {
                return this.left.contains(value);
            }
        } else if(value > this.value){
            if(this.right === null){
                return false;
            } else {
                return this.right.contains(value);
            }
        } else {
            return true;
        }
    }

    remove(value, parent=null){

        //IF the lowest left node then remove it
        if(value < this.value){
            if(this.left !== null){
                this.left.remove(value, this);
            }

          //If the lowest right node then remove it
        } else if(value > this.value){
            if(this.right !== null){
                this.right.remove(value, this);
            }

           //If its the root node
        } else {
            if(this.left !== null && this.right !== null){

                //Get the lowest node on the right half of the tree
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);

            } else if(parent === null){
                if(this.left !== null){
                    this.value = this.left.value;
                    this.right = this.right.left;
                    this.left = this.left.left;
                }

                if(this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                }
            } else if(parent.left === this){
                parent.left = this.left !== null ? this.left : this.right;

            } else if(parent.right === this){
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    getMinValue(){
        if(this.left === null){
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }

}