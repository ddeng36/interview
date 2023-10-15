const Person = function () {};
obj = new Person();
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

console.log(customInstanceOf(obj, Object));
console.log(customInstanceOf(obj, Array));
console.log(Array.constructor);
console.log(Array.prototype);
