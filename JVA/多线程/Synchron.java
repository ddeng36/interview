package JVA.多线程;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Semaphore;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.IntStream;

public class Synchron {
    private ReentrantLock lock = new ReentrantLock();
    private int count = 0;
    private void incr() {
        count++;
    }
    
    // synchronized关键字 代码块
    private void syncIncr1() {
        synchronized (this) {
            count++;
        }
    }
    // synchronized关键字 方法
    private synchronized void syncIncr2() {
        count++;
    }
    // ReentrantLock锁 代码块
    private void reentrantlockIncr() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
    // AtomicInteger
    private AtomicInteger count1 = new AtomicInteger(0);

    // volatile关键字
    private volatile int count2 = 0;
    private void volatileIncr() {
        count2++;
    }

    public static void main(String[] args) {
        Synchron synchron = new Synchron();
        ExecutorService executorService = Executors.newFixedThreadPool(10);
        IntStream.range(0, 1000).forEach(i -> executorService.submit(synchron::incr));
        executorService.shutdown();
        while (!executorService.isTerminated()) {
        }
        System.out.println(synchron.count);
        
        Synchron synchron1 = new Synchron();
        ExecutorService executorService1 = Executors.newFixedThreadPool(10);
        IntStream.range(0, 1000).forEach(i -> executorService1.submit(synchron1::syncIncr1));
        executorService1.shutdown();
        while (!executorService1.isTerminated()) {
        }
        System.out.println(synchron1.count);

        Synchron synchron2 = new Synchron();
        ExecutorService executorService2 = Executors.newFixedThreadPool(10);
        IntStream.range(0, 1000).forEach(i -> executorService2.submit(synchron2::syncIncr2));
        executorService2.shutdown();
        while (!executorService2.isTerminated()) {
        }
        System.out.println(synchron2.count);

        Synchron synchron3 = new Synchron();
        ExecutorService executorService3 = Executors.newFixedThreadPool(10);
        IntStream.range(0, 1000).forEach(i -> executorService3.submit(synchron3::reentrantlockIncr));
        executorService3.shutdown();
        while (!executorService3.isTerminated()) {
        }
        System.out.println(synchron3.count);

        Synchron synchron4 = new Synchron();
        ExecutorService executorService4 = Executors.newFixedThreadPool(10);
        IntStream.range(0, 1000).forEach(i -> executorService4.submit(synchron4.count1::incrementAndGet));
        executorService4.shutdown();
        while (!executorService4.isTerminated()) {
        }
        System.out.println(synchron4.count1.get());

        Synchron synchron5 = new Synchron();
        ExecutorService executorService5 = Executors.newFixedThreadPool(10);
        IntStream.range(0, 1000).forEach(i -> executorService5.submit(synchron5::volatileIncr));
        executorService5.shutdown();
        while (!executorService5.isTerminated()) {
        }
        System.out.println(synchron5.count2);

        // 信号量
        final Semaphore semaphore = new Semaphore(3);
        ExecutorService executorService6 = Executors.newFixedThreadPool(10);
        IntStream.range(0, 10).forEach(i -> executorService6.submit(() -> {
            try {
                semaphore.acquire();
                System.out.println("save data");
                semaphore.release();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }));
        executorService6.shutdown();

    }
}
