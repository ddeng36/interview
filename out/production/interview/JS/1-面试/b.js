// // 最短距离排序： 给定一个对象info以及一个对象数据arr,info以及arr的属性有name以及home,
// // 如：{name:"xxx",home:300}. 请根据属性home,按照每个home与info的差值最小进行对arr对象数据进行升序排序, 并输出距离差值大小distance。
// let info = {name: "sh", home:300}
// let arr = [
// {name: "nj", home:305},
// {name: "bj", home:230},
// {name: "sz", home:960},
// {name: "yn", home:600},
// {name: "tj", home:330},
// ]
// function distanceSorts(info, arr) {
//     const pivot = info.home;
//     for(let i = 0; i < arr.length; i++){
//         arr[i].distance = Math.abs(arr[i].home - pivot)
//     }
//     arr.sort((a,b)=>{
//         return a.distance - b.distance;
//     })
//     return arr
// }
// console.log(distanceSorts(info,arr))

// // 返回：return res = [
// // {name: "nj", home:305, distance: 5},
// // {name: "tj", home:330, distance: 30},
// // {name: "bj", home:230, distance: 70},
// // {name: "yn", home:600, distance: 300},
// // {name: "sz", home:960, distance: 660},
// // ]

function asyncAdd(a, b) {
  return new Promise((res) => {
    setTimeout(() => {
      res(a + b);
    }, 1000);
  });
}

asyncAdd(1, 2).then((a) => console.log(a));
