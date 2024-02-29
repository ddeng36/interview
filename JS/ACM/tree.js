
class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

export default class Tree {
    constructor(arr) {
        this.root = new Node(arr[0]);
        let queue = [this.root];
        for (let i = 1; i < arr.length; i++) {
            const cur = queue.shift();
            if (arr[i] !== null) {
                cur.left = new Node(arr[i]);
                queue.push(cur.left);
            }
            if (arr[++i] !== null) {
                cur.right = new Node(arr[i]);
                queue.push(cur.right);
            }
        }
    }
    preOrderToString(node = this.root) {
        if (!node) return "";
        return node.val + " " + this.preOrderToString(node.left) + this.preOrderToString(node.right);
    }
    inOrderToString(node = this.root) {
        if (!node) return "";
        return this.inOrderToString(node.left) + node.val + " " + this.inOrderToString(node.right);
    }
    postOrderToString(node = this.root) {
        if (!node) return "";
        return this.postOrderToString(node.left) + this.postOrderToString(node.right) + node.val + " ";
    }
}
