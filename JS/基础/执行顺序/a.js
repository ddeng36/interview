var result = [];
var a = 3;
var total = 0;
function foo(a) {
    //创建闭包之后，自动从最近的上下文读取变量
  var i = 0;
  for (; i < 3; i++) {
    result[i] = function() {
      total += i * a;
      console.log(total);
    }
  }
}

foo(1);
result[0]();
result[1]();
result[2]();