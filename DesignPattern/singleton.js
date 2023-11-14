// 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
// 优点：减少内存开销，避免对资源的多重占用，设置全局访问点，严格控制访问。
// 缺点：没有接口，扩展困难，不利于测试。
class SingleDog {
  instance = null;
  static getInstance() {
      if (!SingleDog.instance) {
          SingleDog.instance = new SingleDog()
      }
      return SingleDog.instance
  }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// true
console.log(s1 === s2)

