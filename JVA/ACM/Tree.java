package JVA.ACM;

import java.util.Queue;
import java.util.LinkedList;

public class Tree {
    int val;
    TreeNode root;

    // Constructor - use bfs to create a tree
    public Tree(Integer[] arr) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }
        root = new TreeNode(arr[0]);
        int i = 1;
        int n = arr.length;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (i < n) {
            TreeNode cur = queue.poll();
            if (arr[i] != null) {
                cur.left = new TreeNode(arr[i]);
                queue.offer(cur.left);
            }
            i++;
            if (i < n && arr[i] != null) {
                cur.right = new TreeNode(arr[i]);
                queue.offer(cur.right);
            }
            i++;
        }
    }
}
