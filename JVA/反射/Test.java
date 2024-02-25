package JVA.反射;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class Test {
    @SuppressWarnings("unused")
    public static void main(String[] args) {
        // 四种获取Class对象的方法
        // 1.通过类名.class
        Class<?> clazz1 = TargetObject.class;
        // 2.通过对象.getClass()
        TargetObject targetObject = new TargetObject();
        Class<?> clazz2 = targetObject.getClass();
        // 3.通过Class.forName()
        try {
            Class<?> clazz3 = Class.forName("JVA.反射.TargetObject");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        // 4.通过类加载器
        ClassLoader classLoader = Test.class.getClassLoader();
        try {
            Class<?> clazz4 = classLoader.loadClass("JVA.反射.TargetObject");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }


        // 反射
        // 获取类的属性
        Field[] fields = clazz1.getDeclaredFields();
        for (Field field : fields) {
            System.out.println(field.getName());
        }
        // 获取类的方法
        Method[] methods = clazz1.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println(method.getName());
        }
        // 获取类的构造器
        Constructor<?>[] constructors = clazz1.getDeclaredConstructors();
        for (Constructor<?> constructor : constructors) {
            System.out.println(constructor.getName());
        }
        
    }
}
