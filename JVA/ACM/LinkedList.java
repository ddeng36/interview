package JVA.ACM;

public class LinkedList {
    private ListNode head;
    LinkedList(int[] arr, boolean dummyHead) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }
        if (dummyHead) {
            head = new ListNode(-1);
            ListNode cur = head;
            for (int i = 0; i < arr.length; i++) {
                cur.next = new ListNode(arr[i]);
                cur = cur.next;
            }
        } else {
            head = new ListNode(arr[0]);
            ListNode cur = head;
            for (int i = 1; i < arr.length; i++) {
                cur.next = new ListNode(arr[i]);
                cur = cur.next;
            }
        }
    }

    public ListNode getHead() {
        return head;
    }

    //toString
    public String toString() {
        StringBuilder res = new StringBuilder();
        ListNode cur = head;
        while (cur != null) {
            res.append(cur.val + " -> ");
            cur = cur.next;
        }
        res.append("NULL");
        return res.toString();
    }

}
