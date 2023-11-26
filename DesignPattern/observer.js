// 观察者模式
// 定义了对象一对多的依赖，当一个对象状态改变时，它的所有依赖者都会收到通知
// 优点：观察者和被观察者是抽象耦合的，符合依赖倒置原则
// 一个被观察物体subject，多个观察者observer
class Subject{
    constructor(){
        this.observers = [];
    }
    addObserver(observer){
        this.observers.push(observer);
    }
    removeObserver(observer){
        this.observers = this.observers.filter(item => item !== observer);
    }
    notify(){
        this.observers.forEach(observer => {
            observer.update();
        })
    }
}

class Observer{
    constructor(name){
        this.name = name;
    }
    update(){
        console.log(`${this.name} update`);
    }
}

const subject = new Subject();
const observer1 = new Observer('observer1');
const observer2 = new Observer('observer2');
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify();
subject.removeObserver(observer2);
subject.notify();


