// 当new对象消耗较大时，通过拷贝旧对象来生成新对象
//注意这里不用类，而是直接用对象
const personProto = {
    init(name){
        this.name = name;
    },
    say(){
        console.log(`I am ${this.name}`);
    }
}
const car1 = Object.create(personProto);
car1.init('car1');
car1.say();

const car2 = Object.create(personProto);
car2.init('car2');
car2.say();
//car1并没有被改变
car1.say();