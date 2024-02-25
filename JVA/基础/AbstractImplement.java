package JVA.基础;

public class AbstractImplement {
    public static void main(String[] args) {
        
    }
    // diif between abstract class and interface

    abstract class AbstractClass {
        public void abstractMethod() {
            System.out.println("This is an abstract method");
        };
    }

    interface Interface {
        // 接口无法定义方法的实现
        // public void abstractMethod(){
        //     System.out.println("This is an abstract method");
        // };
    }

}
