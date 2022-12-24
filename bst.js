class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
    
class Tree {
    constructor(array){
        this.array = removeDuplicates(array.sort((a,b)=> a-b));
        this.root = this.buildTree(array,0,array.length-1);
    }
    
    buildTree(array,start,end){
        if(start > end) return null;
        let mid = parseInt((start+end) / 2);
        let root = new Node(array[mid]);
        root.left = this.buildTree(array, start, mid-1);
        root.right = this.buildTree(array, mid+1, end);
        return root;
    }

    insert(value, root){
        if(root == null){
            root = new Node(value);
            return root;
        }
        if (root.data > value){
            root.left = this.insert(value,root.left)
        } 
        else {
            root.right = this.insert(value, root.right);
        }
        return root;
    }

    delete(value,root){
        if (root == null) return root;
        if(root.data > value){
            root = this.delete(value, root.left);
        }
        else if (root.data < value){
            root = this.delete(value,root.right);
        }
        else{
            // If left child is null, return right.
            if (root.left == null) return root.right;
            // If right child is null, return left.
            else if (root.right == null) return root.left;
            // If both right and left not null
            // Set new root data to the smallest of right tree.
            root.data = minValue(root.right);
            root.right = delete(root.data , root.right);
        }
        return root;
    }

    minValue(root){
        let minVal = root.data;
        while(root.left !== null){
            minVal = root.left.data;
            root = root.left;
        }
        return minVal;
    }

    find(value,root){
        if (root == null) return null;
        if (root.data == value) return root;
        else if(value > root.data){
            root = this.find(value,root.right);
        }
        else {
            root = this.find(value,root.left);
        }
       
        return root;
    }

    // iteration
    levelOrder(root){
        let results = [];
        let queue = [];
        if(root!==null) queue.push(root);
        while(queue.length){
            if(queue[0].left!==null)queue.push(queue[0].left);
            if(queue[0].right!==null)queue.push(queue[0].right);
            results.push(queue[0]);
            queue.shift();
        }
        return results;
    }

    preOrder(root){
        if(root == null) return;
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root){
        if(root == null) return;
        this.preOrder(root.left)
        console.log(root.data);
        this.preOrder(root.right);
    }

    postOrder(root){
        if(root == null) return;
        this.preOrder(root.left);
        this.preOrder(root.right);
        console.log(root.data);
    }

    height(root){
        if (root == null) return 0;
        else{
            let leftHeight = this.height(root.left);
            let rightHeight = this.height(root.right);
            return Math.max(leftHeight,rightHeight) + 1;
        }
    }

    depth(node, root = this.root){
        let depth = 0;
        if (node == null || root == null) return ;
        else if (root.data == node || 
                (depth = this.depth(node,root.left)) >=0 ||
                (depth = this.depth(node,root.right)>=0)){
            return depth+1; 
        }
        return depth;
    }

    isBalanced(root){
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        if (Math.abs(leftHeight-rightHeight) > 1) return false;
        return true;
    }

    traverse(root,array){
        if (array!== undefined) array.push(root.data);
        if(root.left !== null) {
            this.traverse(root.left,array);
        }
        if (root.right !== null){
            this.traverse(root.right,array)
        }
        return array;
    }
    rebalance(){
        if (this.isBalanced(this.root)) return this.root;
        let balancedTreeArray = [];
        balancedTreeArray = this.traverse(this.root, balancedTreeArray);
        let balancedTree = new Tree(balancedTreeArray);
        return balancedTree.root;
    }
    
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

function removeDuplicates(array){
    let map = new Map();
    for(let i=0;i<array.length;i++){
        if(map.has(array[i])){
            array.splice(i,1);
            i--;
        }
        else{
            map.set(array[i],i);
        }
    }
    return array;
}



// let array = [1, 7, 4, 23, 8, 9, 3, 5, 1];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tree = new Tree(array);
prettyPrint(tree.root);
// tree.insert(10,tree.root);
// console.log("insertion completed");
// prettyPrint(tree.root);
// tree.delete(10,tree.root);
// console.log("delete completeted");
// console.log(tree);
// console.log(tree.find(1, tree.root));
// let treeResults = tree.traverseTree(tree.root);
// console.log(treeResults);
// tree.preOrder(tree.root);
// console.log("preOrder done");
// tree.inOrder(tree.root);
// console.log("inOrder done");tree.traverse(tree.root, []);
// console.log(maxHeight);
// let maxDepth = tree.depth(4,tree.root);
// console.log(maxDepth);
// tree.insert(25,tree.root);
// tree.insert(28,tree.root);
// tree.insert(30,tree.root);
// tree.insert(31,tree.root);
prettyPrint(tree.root);
let balancedTree = tree.isBalanced(tree.root);
console.log(balancedTree);
let rebalanceTree = tree.rebalance();
console.log(rebalanceTree);
prettyPrint(rebalanceTree);
console.log(tree.depth(7));