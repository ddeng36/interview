async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  
  async function async2() {
    console.log("async2");
  }
  
  console.log("script start");
  
  setTimeout(function () {
    console.log("setTimeout");
  }, 0);
  //await async()有区别吗,把15行之后的全部加入微队列
  async1();
  
  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("promise2");
  });
  
  console.log("script end");