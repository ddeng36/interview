class Node {
    constructor(val,left,right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new Node(3,
    new Node(9,null,null),
    new Node(1,
            new Node(1,null,null),
            new Node(3,null,null)
        )
    )

const zigzag = function(root) {
    if (!root) {
        return [];
    }

    const ans = [];
    const queue = [root];

    let leftFlag = true;

    // BFS
    while(queue.length) {
        let levelList = [];
        const size = queue.length;

        // each level
        for(let i = 0; i < size; ++i) {
            // current node
            const node = queue.shift();

            // add to sub ans
            if (leftFlag) {
                levelList.push(node.val);
            } else {
                levelList.unshift(node.val)
            }
            // ass node of next level
            if(node.left !== null) {
                queue.push(node.left);
            }
            if(node.right !== null) {
                queue.push(node.right);
            }
        }

        ans.push(levelList);
        leftFlag = !leftFlag;
    }
    return ans;
}

console.log(zigzag(root))