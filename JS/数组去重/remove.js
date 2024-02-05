arr = [1,1,2,2,3,3]
// 方法一：Set 
const removeDuplicate1 = function(arr){
    return Array.from(new Set(arr))
    //return [...new Set(arr)]
}
console.log("Set:" + removeDuplicate1(arr))

//方法二：reduce
const removeDuplicate2 = function(arr) {
    return arr.reduce((pre, cur)=>{
        if(!pre.includes(cur)){
            pre.push(cur)
        }
        return pre;
    },[])
}
console.log("reduce:" + removeDuplicate2(arr))

