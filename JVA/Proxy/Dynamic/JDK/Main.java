package JVA.Proxy.Dynamic.JDK;

public class Main {
    public static void main(String[] args) {
        SmsService smsService = (SmsService) JdkProxyFactory.getProxy(new SmsServiceImpl());
        smsService.send("java");
        smsService.send2("java");
}
}
