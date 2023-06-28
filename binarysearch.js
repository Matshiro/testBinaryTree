const sampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 200, 43, 2, 6, 9, 12, 14, 16, 18, 22, 24];


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

    insert(value, node = this.root){ 
      if (node === null){
        return new Node(value);
      }
      if (value < node.data){
        node.left = this.insert(value, node.left);
      }
      else if (value > node.data){
        node.right = this.insert(value, node.right);
      }
      return node;
    }

    delete(value, node = this.root){
      if (node === null){
        return node;
      }
      if (value < node.data){
        node.left = this.delete(value, node.left);
      }
      else if ( value > node.data){
        node.right = this.delete(value, node.right);
      }
      else{
        if (node.left === null){
          return node.right;
        }
        else if (node.right === null){
          return node.left;
        }
        else{
          const minData = function findNextSmallestRightData(node){
            let min = node.data;
            let newRoot = node;

            while (newRoot.left !== null){
              min = node.left.data;
              newRoot = newRoot.left;
            }

            return min;
          }

          node.data = minData(node.right);

          node.right = this.delete(node.data, node.right);
        }
      }
      return node;
    }

    find(value, node = this.root){
      if (node === null){
        return;
      }
      if (value < node.data){
        node.left = this.find(value, node.left);
      }
      else if (value > node.data){
        node.right = this.find(value, node.right);
      }
      if (value == node.data){
        console.log(node);
        return node;
      }
    }

    levelOrder(arr = [], queue = [], node = this.root){
      if (node === null){
        return;
      }
      arr.push(node.data);
      queue.push(node.left);
      queue.push(node.right);

      while (queue.length){
        const level = queue[0];
        queue.shift();
        this.levelOrder(arr, queue, level);
      }
      return arr;
    }

    inorder(arr = [], node = this.root){
      if (node === null){
        return;
      }

      if (node.left){
        this.inorder(arr, node.left);
      }

      arr.push(node.data);

      if (node.right){
        this.inorder(arr, node.right);
      }

      return arr;
    }

    preorder(arr = [], node = this.root){
      if (node === null){
        return;
      }

      arr.push(node.data);

      if (node.left){
        this.preorder(arr, node.left);
      }

      if (node.right){
        this.preorder(arr, node.right);
      }

      return arr;
    }

    postorder(arr = [], node = this.root){
      if (node === null){
        return;
      }

      if (node.left){
        this.preorder(arr, node.left);
      }

      if (node.right){
        this.preorder(arr, node.right);
      }

      arr.push(node.data);

      return arr;
    }

    height(node = this.root){
      if (node === null){
        return 0;
      }

      let lHeight = this.height(node.left);
      let rHeight = this.height(node.right);

      if (lHeight > rHeight){
        return lHeight + 1;
      }
      else{
        return rHeight + 1;
      }
    }

    depth(node, root = this.root, depth = 0){
      if (root === null || node === null){
        return;
      }

      if (node === root){
        return `Depth: ${depth}`;
      }

      if (node.data < root.data){
        return this.depth(node, root.left, depth += 1);
      }
      else{
        return this.depth(node, root.right, depth += 1);
      }
    }

    isBalanced(node = this.root){
      const lHeight = this.height(root.left);
      const rHeight = this.height(root.right);
      const diff = Math.abs(lHeight - rHeight);
      return diff < 2 ? 'true' : 'false';
    }

    
};



let bst = new Tree(sampleArray);
// bst.delete(7)


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