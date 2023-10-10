function race(array) {
  return new Promise((res, rej) => {
    array.forEach((promise) => {
      promise.then((result) => res(result)).catch("rej");
    });
  });
}

const p1 = new Promise((res, rej) => {
  setTimeout(() => res("p1"), 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => res("p2"), 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => res("p3"), 1000);
});
const array = [p1, p2, p3];
race(array).then((res, rej) => {
  console.log(res);
});