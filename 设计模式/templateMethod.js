 // 模版方法
 // 定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。

 class Beverage {
    prepare(){
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
    boilWater(){
        console.log('把水煮沸');
    }
    brew(){
        throw new Error('子类必须实现brew方法');
    }
    pourInCup(){
        throw new Error('子类必须实现pourInCup方法');
    }
    addCondiments(){
        throw new Error('子类必须实现addCondiments方法');
    }
}

class Coffee extends Beverage{
    brew(){
        console.log('用沸水冲泡咖啡');
    }
    pourInCup(){
        console.log('把咖啡倒进杯子');
    }
    addCondiments(){
        console.log('加糖和牛奶');
    }
}

class Tea extends Beverage{
    brew(){
        console.log('用沸水冲泡茶叶');
    }
    pourInCup(){
        console.log('把茶叶倒进杯子');
    }
    addCondiments(){
        console.log('加柠檬');
    }
}

const coffee = new Coffee();
coffee.prepare();

const tea = new Tea();
tea.prepare();
