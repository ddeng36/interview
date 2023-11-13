// 策略模式
// 定义一系列算法，把它们一个个封装起来，并且使它们可以相互替换
// 优点：1.算法可以自由切换 2.避免使用多重条件判断 3.扩展性良好

// 策略的接口
class Operation{
    calculate(a,b){}
}
// 加法
class AddOperation extends Operation{
    calculate(a,b){
        return a+b;
    }
}
// 减法
class SubOperation extends Operation{
    calculate(a,b){
        return a-b;
    }
}
// 乘法
class MulOperation extends Operation{
    calculate(a,b){
        return a*b;
    }
}
// 除法
class DivOperation extends Operation{
    calculate(a,b){
        return a/b;
    }
}

// calculator
class Calculator{
    constructor(operation){
        this.operation = operation;
    }
    calculate(a,b){
        return this.operation.calculate(a,b);
    }
}

// +
const addOperation = new AddOperation();
const calculator = new Calculator(addOperation);
console.log(calculator.calculate(1,2)); // 3

// -
const subOperation = new SubOperation();
const calculator2 = new Calculator(subOperation);
console.log(calculator2.calculate(1,2)); // -1

