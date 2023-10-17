const Person = function () {};
class Alice extends Person {}
alice = new Alice();
function customInstanceOf(obj, constructor) {
  let objProto = Object.getPrototypeOf(obj);
  while (objProto !== null) {
    if (objProto === constructor.prototype) {
      return true;
    }
    objProto = Object.getPrototypeOf(objProto);
  }
  return false;
}

// console.log(customInstanceOf(alice, Object));

// 这两种方法为查找隐式原型，new出来的实例有隐式原型，但是类没有
// 类的原型是类的prototype
// 他们都指向构造器
console.log(Object.getPrototypeOf(alice) === Alice.prototype);
console.log(alice.__proto__ === Alice.prototype);
