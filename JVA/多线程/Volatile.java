package JVA.多线程;

public class Volatile {
    // volatile 保证可见性
    // 如果没有volatile，那么线程1修改了flag的值，线程2是不知道的
    // 所以，需要volatile保证flag的写操作对其他线程的可见性

    //双重锁校验单例模式
    public static class Singleton {
        private volatile static Singleton uniqueInstance;
        private Singleton() {}

        public static Singleton getUniqueInstance() {
            if (uniqueInstance == null) {
                synchronized (Singleton.class) {
                    if (uniqueInstance == null) {
                        // new对象分为1.分配内存2.初始化3.分配内存地址
                        // 由于指令重排，可能编程132，此时t1执行13，t2执行2,则会获得错误对象
                        uniqueInstance = new Singleton();
                    }
                }
            }
            return uniqueInstance;
        }
    }
}
