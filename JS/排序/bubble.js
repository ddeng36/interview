const arr = [1, 3, 9, 7, 6, 4, 2, 8, 5];

const bubbleSort = function (arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
// console.log(bubble(arr))

const selectSort = function (arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let maxNumIdx = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[maxNumIdx]) {
        maxNumIdx = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[maxNumIdx];
    arr[maxNumIdx] = temp;
  }
  return arr;
};
// console.log(selectSort(arr))

const quickSort = function (arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const leftArr = [];
  const rightArr = [];
  const pivot = Math.ceil(len / 2);
  const pivotNum = arr[pivot];
  for (const num of arr) {
    if (num < pivotNum) {
      leftArr.push(num);
    } else if (num == pivotNum) {
      continue;
    } else {
      rightArr.push(num);
    }
  }
  const leftSortedArr = quickSort(leftArr);
  const rightSortedArr = quickSort(rightArr);
  return [...leftSortedArr, pivotNum, ...rightSortedArr];
};
// console.log(quickSort(arr));

map = new Map();
map.set(1,1)
map.set(2,2)
for(let a of map){
  console.log(a)
}