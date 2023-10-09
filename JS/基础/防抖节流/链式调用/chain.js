// const calculator = {
//     val: 0,
//     x: function(adder){
//         this.val = this.val + adder;
//         return this;
//     },
    
// }
// console.log(calculator.x(3))

const calculator= function(val){
    this.val = val
    this.f = function(x){
        this.val + x; 
        return this;
    }
    this.r = function(){
        return this.val
    }
}
console.log(new calculator(1).f(1).r())
