package JVA.ACM;


public class Test {
    public static void main(String[] args) {
        // int[] arr = {1, 2, 3, 4, 5};
        // LinkedList list = new LinkedList(arr, true);
        // ListNode head = list.getHead();
        // System.out.println(head);
        // System.out.println(list.toString());

        // 输入arraylist：root = [1,null,2,3]
        // 输出tree：[1,null,2,3]
        
        Integer[] arr = {1, null, 2, 3, null, 4, 5};
        Tree tree = new Tree(arr);
        TreeNode root = tree.root;
        System.out.println(root);

        
    }
}
