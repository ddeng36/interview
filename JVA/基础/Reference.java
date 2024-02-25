package JVA.基础;

public class Reference {
    public static void main(String[] args) {
        Person xiaoZhang = new Person("小张");
        Person xiaoLi = new Person("小李");
        // Person temp = xiaoZhang;
        // xiaoZhang = xiaoLi;
        // xiaoLi = temp;
        // System.out.println("xiaozhang" + xiaoZhang.getName());
        // System.out.println("xiaoli" + xiaoLi.getName());
        swap(xiaoZhang, xiaoLi);
        System.out.println("xiaoZhang:" + xiaoZhang.getName());
        System.out.println("xiaoLi:" + xiaoLi.getName());
    }
    
    public static void swap(Person person1, Person person2) {
        Person temp = person1;
        person1 = person2;
        person2 = temp;
        System.out.println("person1:" + person1.getName());
        System.out.println("person2:" + person2.getName());
    }
    
}