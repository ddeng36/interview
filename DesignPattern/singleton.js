// 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
// 优点：减少内存开销，避免对资源的多重占用，设置全局访问点，严格控制访问。
// 缺点：没有接口，扩展困难，不利于测试。
const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object("I am the instance");
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true


