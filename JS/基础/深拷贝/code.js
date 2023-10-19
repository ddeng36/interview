const oringinal = {
    a:1,
    b:2,
    c:{
        d:3,
        e:[4,5,6],
    },
    f:{
        [Symbol('g')]:7,
        h: new Set([8,9,10]),
        i: new Map([[11,12],[13,14]]),
        j: function(){console.log("j")},
    }
}

//方法一：JSON
// □undefined, function, symbol丢失
// set, map变成空对象
const deepCopy1 = function(oringinal){
    return JSON.parse(JSON.stringify(oringinal))
}
console.log("JSON:")
console.log(deepCopy1(oringinal));
// 如果数组里面有对象怎么办，如果是函数怎么办，
// 如果是正则怎么办，如果是Set怎么办，如果是Map怎么办，
// 如果是Symbol怎么办，如果是undefined怎么办，
// 如果是循环引用怎么办
// 方法二：递归
const deepCopy2 = function(oringinal){
    let newData = {}
    const oringinalKeys = Object.keys(oringinal);
    oringinalKeys.forEach(key =>{
        const value = oringinal[key];
        //如果为类，则递归
        if(Object.prototype.hasOwnProperty(oringinal[key])){
        // if(typeof value === 'object' && value !== null){
            newData[key] = deepCopy2(value);
        }
        //如果为数组，则解构
        else if(Array.isArray(value)){
            newData[key] = [...value];
        }
        //如果为Set，则解构
        else if(value instanceof Set){
            newData[key] = new Set([...value]);
        }
        //如果为Map，则解构
        else if(value instanceof Map){
            newData[key] = new Map([...value]);
        }
        //如果为基本类型，则直接赋值
        else{
            newData[key] =  value;
        }
    })
    return newData;
}
console.log("递归：")
console.log(deepCopy2(oringinal))

