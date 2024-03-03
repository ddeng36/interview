const person = {
    firstName : 'DENG',
    lastName : 'Dingchao',
}

//call - 传入对象，和单个参数
const greet1 = function (word){
    console.log(`${word} from ${this.firstName} ${this.lastName}`);
}
greet1.call(person, 'Hello');

//apply - 传入对象，和数组
const greet2 = function(word1, word2){
    console.log(`${word1} ${word2} from ${this.firstName} ${this.lastName}`);
}
greet2.apply(person,['Hello', 'World']);

//bind - 传入对象，和单个参数
//区别为返回一个新的函数，需要调用
const greet3 = function(word){
    console.log(`${word} from ${this.firstName} ${this.lastName}`);
}
const greet3Bind = greet3.bind(person);
greet3Bind('Hello');