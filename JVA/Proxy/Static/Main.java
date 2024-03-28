package JVA.Proxy.Static;

public class Main {
    public static void main(String[] args) {
        // 真的对象
        MsgService msgService = new MsgServiceImpl();
        // 代理对象
        MsgService msgProxy = new MsgProxy(msgService);
        // 静态代理新增方法的时候需要修改代理类
        msgProxy.send("hello");
    }
}