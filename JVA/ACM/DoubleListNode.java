package JVA.ACM;

public class DoubleListNode {
    int val;
    DoubleListNode next;
    DoubleListNode prev;

    DoubleListNode(int x) {
        val = x;
    }

    DoubleListNode(int x, DoubleListNode next, DoubleListNode prev) {
        this.val = x;
        this.next = next;
        this.prev = prev;
    }

}
