class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        }

        let curr = this.root;
        while (true) {
            if (val < curr.val) {
                if (curr.left === null) {
                    curr.left = new Node(val);
                    return this;
                } else {
                    curr = curr.left;
                }
            } else if (val > curr.left) {
                if (curr.right === null) {
                    curr.right = new Node(val);
                    return this;
                } else {
                    curr = curr.right;
                }
            }
        }
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, curr = this.root) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        }

        if (val < curr.val) {
            if (curr.left == null) {
                curr.left = new Node(val);
                return this;
            }
            return this.insertRecursively(val, curr.left);
        } else {
            if (curr.right === null) {
                curr.right = new Node(val);
                return this;
            }
            return this.insertRecursively(val, curr.right);
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        let currNode = this.root;
        let found = false;
        if (val === currNode.val) {
            return currNode;
        }

        while (currNode && !found) {
            if (val < currNode.val) {
                currNode = currNode.left;
            } else if (val > currNode.val) {
                currNode = currNode.right;
            } else {
                found = true;
            }
        }
        if (!found) {
            return undefined;
        }
        return currNode;
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, curr = this.root) {
        if (this.root === null) return undefined;

        if (val < current.val) {
            if (curr.left === null) {
                return undefined;
            } else {
                return this.findRecursively(val, curr.left);
            }
        } else if (val > curr.val) {
            if (curr.right === null) {
                return undefined;
            } else {
                return this.findRecursively(val, current.right);
            }
        }
        return current;
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
      let arr = [];
      let curr = this.root;
  
      function traverse(node) {
        arr.push(node.val); // visit
        node.left && traverse(node.left); // go left if there's a left
        node.right && traverse(node.right); // go right if there's a right
      }
  
      traverse(curr);
      return arr;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
      let arr = [];
      let curr = this.root;
  
      function traverse(node) {
        node.left && traverse(node.left); // go left if there's a left
        arr.push(node.val); // visit
        node.right && traverse(node.right); // go right if there's a right
      }
  
      traverse(curr);
      return arr;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
      let arr = [];
      let curr = this.root;
  
      function traverse(node) {
        node.left && traverse(node.left); // go left if there's a left
        node.right && traverse(node.right); // go right if there's a right
        arr.push(node.val); // visit
      }
  
      traverse(curr);
      return arr;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
      let node = this.root;
      let data = [];
      let queue = [];
  
      queue.push(node);
  
      while (queue.length) {
        node = queue.shift();
        data.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
  
      return data;
    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {}

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {}

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {}
}

module.exports = BinarySearchTree;
