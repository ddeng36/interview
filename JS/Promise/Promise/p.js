class MyPromise {
    constructor(executor) {
      this.status = 'pending'; // 初始状态为 pending
      this.value = undefined; // 保存 Promise 的最终值
      this.reason = undefined; // 保存 Promise 被拒绝的原因
      this.onResolvedCallbacks = []; // 存储成功回调函数
      this.onRejectedCallbacks = []; // 存储失败回调函数
  
      const resolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'fulfilled'; // 修改状态为成功
          this.value = value; // 保存最终值
  
          // 执行成功回调函数
          this.onResolvedCallbacks.forEach((callback) => callback(value));
        }
      };
  
      const reject = (reason) => {
        if (this.status === 'pending') {
          this.status = 'rejected'; // 修改状态为失败
          this.reason = reason; // 保存拒绝原因
  
          // 执行失败回调函数
          this.onRejectedCallbacks.forEach((callback) => callback(reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error); // 如果执行器函数抛出异常，将 Promise 状态置为 rejected
      }
    }
  
    then(onFulfilled, onRejected) {
      if (this.status === 'fulfilled') {
        onFulfilled(this.value); // 如果状态已经是 fulfilled，则直接调用成功回调
      } else if (this.status === 'rejected') {
        onRejected(this.reason); // 如果状态已经是 rejected，则直接调用失败回调
      } else if (this.status === 'pending') {
        // 如果状态是 pending，将成功和失败回调存储起来，稍后调用
        this.onResolvedCallbacks.push(onFulfilled);
        this.onRejectedCallbacks.push(onRejected);
      }
    }
  }
  
  // 使用示例
  const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功');
      // reject('失败');
    }, 1000);
  });
  
  promise.then(
    (value) => {
      console.log('成功：', value);
    },
    (reason) => {
      console.log('失败：', reason);
    }
  );
  