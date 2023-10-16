
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

console.log(customInstanceOf(alice, Object));
