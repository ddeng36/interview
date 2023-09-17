arr = [1,1,2,2,3,3]
// 方法一：Set 
const removeDuplicate1 = function(arr){
    return Array.from(new Set(arr))
    //return [...new Set(arr)]
}
console.log("Set:")
console.log(removeDuplicate1(arr))