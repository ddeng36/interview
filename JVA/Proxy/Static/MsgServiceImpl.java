package JVA.Proxy.Static;

public class MsgServiceImpl implements MsgService {
    @Override
    public String send(String message) {
        System.out.println("send message: " + message);
        return message;
    }
}
