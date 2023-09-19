console.log(1);
Promise.resolve().then(() => {
  console.log(2);
  setTimeout(() => {
    console.log(3);
  }, 0);
});
setTimeout(() => {
  console.log(4);
  new Promise((resolve) => {
    console.log(5);
    resolve();
  }).then(() => {
    console.log(6);
  });
}, 0);
console.log(7);
// 1， 7 ，2， 4 ， 5 ， 6 ， 3