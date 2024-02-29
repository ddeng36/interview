import LinkedList from "./linkedList.js";
import Tree from "./tree.js";

const arr = [1,2,3,4,5,6,7];
const ll = new LinkedList(arr);
console.log(ll.toString());
console.log(ll.getHead());

const tree = new Tree(arr);
console.log(tree.preOrderToString());
console.log(tree.inOrderToString());
console.log(tree.postOrderToString());

const tree2 = new Tree([1,null, 2, 3]);
console.log(tree2.preOrderToString());
console.log(tree2.inOrderToString());
console.log(tree2.postOrderToString());
//    1
//   2 3
// 4 5 6 7
