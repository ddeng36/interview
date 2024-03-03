// reduce workflow
const arr = [1, 2, 3];
const initialValue = 0;
const add = (previousValue, currentValue) => previousValue + currentValue;
const sumArr = arr.reduce(add, initialValue);
console.log(sumArr);
// expected output: 6

// use reduce to implement map
const add1AndPush = (previousValue, currentValue) => {
  previousValue.push(currentValue + 1);
  return previousValue;
};
const mapArr = arr.reduce(add1AndPush, []);
console.log(mapArr);
// expected output: [ 2, 3, 4 ]

// Pipe
function add4(num) {
  return num + 4;
}
function multiply3(num) {
  return num * 3;
}
function divide2(num) {
  return num / 2;
}

function pipe(...args) {
  const callback = (input, func) => func(input);
  return function(initVal) {
    return args.reduce(callback,initVal);
  }
}

const compute = pipe(add4, multiply3, divide2);
console.log(compute(10));

// Compose (reverse pipe)
function compose(...args) {
  const callback = (input, func) => func(input);
  return function(initVal) {
    return args.reduceRight(callback, initVal);
  }
}
const composeCompute = compose(divide2, multiply3, add4);
console.log(composeCompute(10));