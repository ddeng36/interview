
const calculator= function(val){
    this.val = val
    this.f = function(x){
        this.val += x; 
        return this;
    }
    this.r = function(){
        return this.val
    }
}
c = new calculator(15)
console.log(c.f(1).f(3).r())


// const calculator = {
//     val: 0,
//     x: function(adder) {
//         this.val = this.val + adder;
//         return this;
//     }
// };

// console.log(calculator.x(3).x(4).x(5).val); // 12
