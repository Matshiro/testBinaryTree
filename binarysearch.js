const sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];


class Node{

    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

class Tree{

    constructor(array) {
        this.root = this.buildTree(array);  
    }

    sortAndRemoveDupes(array) {
        const sorted = [...new Set(array)].sort((a, b) => a - b);
        return sorted;
    }

    buildTree(array){
       let sorted = this.sortAndRemoveDupes(array);
       if (sorted.length === 0){
        return null;
       }
       const midValue = parseInt(sorted.length / 2);
       const root = new Node(
        sorted[midValue],
        this.buildTree(sorted.slice(0, midValue)),
        this.buildTree(sorted.slice(midValue + 1))
       );
       return root;
    }

};



let bst = new Tree(sampleArray);


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

prettyPrint(bst.root)