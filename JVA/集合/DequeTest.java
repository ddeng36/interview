package JVA.集合;

import java.util.ArrayDeque;
import java.util.Deque;

public class DequeTest {
    public static void main(String[] args) {
        // use Deque as Queue
        System.out.println("use Deque as Queue");
        Deque<Integer> deque = new ArrayDeque<>();
        deque.offer(1);
        deque.offer(2);
        deque.offer(3);
        deque.offer(4);
        System.out.println(deque);
        System.out.println(deque.poll());
        System.out.println(deque.poll());
        System.out.println(deque.poll());
        System.out.println(deque.poll());
        // System.out.println(deque.remove()); // error

        // use Deque as Stack
        System.out.println("use Deque as Stack");
        Deque<Integer> deque2 = new ArrayDeque<>();
        deque2.push(1);
        deque2.push(2);
        deque2.push(3);
        System.out.println(deque2);
        System.out.println(deque2.pop());
        System.out.println(deque2.pop());
        System.out.println(deque2.pop());
        // System.out.println(deque2.pop()); // error

        // use Deque as double ended queue
        System.out.println("use Deque as double ended queue");
        Deque<Integer> deque3 = new ArrayDeque<>();
        deque3.offerFirst(1);
        deque3.offerFirst(2);
        deque3.offerLast(3);
        deque3.offerLast(4);
        System.out.println(deque3);
        System.out.println(deque3.pollFirst());
        System.out.println(deque3.pollFirst());
        System.out.println(deque3.pollLast());
        System.out.println(deque3.pollLast());
        System.out.println(deque3);

    }
}
