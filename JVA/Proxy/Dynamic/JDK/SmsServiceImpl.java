package JVA.Proxy.Dynamic.JDK;

public class SmsServiceImpl implements SmsService {
    public String send(String message) {
        System.out.println("send message:" + message);
        return message;
    }
    public String send2(String message) {
        System.out.println("send2 message:" + message);
        return message;
    }
}
