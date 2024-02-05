package Jva;

public class Casting {

    public static void main(String[] args) {
        // Up casting
        System.out.println("Up casting");
        Child c = new Child();
        c.out();
        c.out2();
        Parent p = (Parent)c;
        p.out();
        // p.out2(); // error

        // Down casting
        System.out.println("Down casting");
        Parent p2 = new Child();
        p2.out();
        // p2.out2(); // error
        Child c2 = (Child)p2;
        c2.out();
        c2.out2();
    }
}
class Parent {
    Parent(){};
    public void out(){
        System.out.println("parent out");
    }
}
class Child extends Parent {
    Child(){};
    public void out(){
        System.out.println("child out");
    }
    public void out2(){
        System.out.println("child out2");
    }
}
