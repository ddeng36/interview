function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        // 如果提供的参数数量足够，执行原始函数
        return fn(...args);
      } else {
        // 否则，返回一个新的函数，等待更多参数
        return function (...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
  }
  
  // 示例：一个接受三个参数的函数
  function sum(a, b, c) {
    return a + b + c;
  }
  
  // 使用柯里化
  const curriedSum = curry(sum);
  
  console.log(curriedSum(1)(2)(3)); // 输出 6
  console.log(curriedSum(1, 2)(3)); // 输出 6
  console.log(curriedSum(1)(2, 3)); // 输出 6
  console.log(curriedSum(1, 2, 3)); // 输出 6
  