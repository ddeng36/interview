// 装饰器模式

// 基础组件
class Coffee {
    cost() {
        return 10
    }
}


// 装饰器基类
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super()
        this.coffee = coffee
    }
    cost() {
        return this.coffee.cost()
    }
}

// 具体组件 - 简单咖啡
class SimpleCoffee extends Coffee {
    cost() {
        return super.cost()
    }
}

// 具体装饰器 - 牛奶装饰
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return super.cost() + 2
    }
}
// 具体装饰器 - 巧克力装饰
class ChocolateDecorator extends CoffeeDecorator {
    cost() {
        return super.cost() + 3
    }
}

// 测试
let coffee = new SimpleCoffee()
console.log(coffee.cost()) // 10

let milkCoffee = new MilkDecorator(new SimpleCoffee())
console.log(milkCoffee.cost()) // 12

let chocolateCoffee = new ChocolateDecorator(new SimpleCoffee())
console.log(chocolateCoffee.cost()) // 13

let milkChocolateCoffee = new MilkDecorator(new ChocolateDecorator(coffee))
console.log(milkChocolateCoffee.cost()) // 16
