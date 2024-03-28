package JVA.Proxy.Static;

public class MsgProxy implements MsgService {
    private final MsgService msgService;

    public MsgProxy(MsgService msgService) {
        this.msgService = msgService;
    }

    @Override
    public String send(String message) {
        System.out.println("before send message");
        String result = msgService.send(message);
        System.out.println("after send message");
        return result;
    }
}