// 形如1, 1, 2, 3, 5, 8, 13, 21, 34, 55的数列，后一位是前面两位相加（斐波那契数列），
// 写出函数要求找到第 N 位是多少，如：fib(3) => 3 ， fib(5) => 8, 要求时间复杂度为O(n)。

const arr =[1,1]
const fib = function(num){
    for(let i = 2; i <= num; i++){
        arr.push(arr[i-2]+arr[i-1]);
    }
    return arr[num]
}
// console.log(fib(3))
console.log(fib(5))