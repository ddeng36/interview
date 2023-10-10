let fn = function(){
    return this;
}
// console.log(fn())
// window
// 因为该函数在全局中调用

let print = ()=>{
    return this
}
// console.log(print()) 
// => window
//在全局中调用

let f1 = function(num){
    this.num = num
    this.f2 = function(x){
        this.num +=x
        return this.num;
    }
    this.f3 = ()=>{
        return this;
    }
}
console.log(new f1(1).f2(2))
// => f1
// console.log(new f1().f3())
// => f1
// 都是通过new

obj = {
    a: 1,
    b: function(){
        return this.a
    },
    c: print
}
// console.log(obj.b()); 
// => 1

// console.log(obj.c())
// => undefined
