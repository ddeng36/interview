package JVA.反射;

public class TargetObject {
    @SuppressWarnings("unused")
    private String privateValue;
    public String publicValue;
    public TargetObject() {
        privateValue = "private";
        publicValue = "public";
    }
    @SuppressWarnings("unused")
    private void privateMethod() {
        System.out.println("This is a private method");
    }
    public void publicMethod() {
        System.out.println("This is a public method");
    }
}
