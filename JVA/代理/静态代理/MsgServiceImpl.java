package JVA.代理.静态代理;

public class MsgServiceImpl implements MsgService {
    @Override
    public String send(String message) {
        System.out.println("send message: " + message);
        return message;
    }
}
