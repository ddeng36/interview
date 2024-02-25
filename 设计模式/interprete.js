// 解释器模式
// 用于解释一些固定文法构成的句子
// 例如正则表达式、sql语句等

// 抽象接口
class RuleExpression{
    interpreter(context){
        throw new Error('抽象方法不能调用')
    }
}

// 具体表达式 and
class AndExpression extends RuleExpression{
    constructor(left, right){
        super();
        this.left = left;
        this.right = right;
    }
    interpreter(context){
         return this.left.interpreter(context) && this.right.interpreter(context);
}
}
// 具体表达式 or
class OrExpression extends RuleExpression{
    constructor(left, right){
        super();
        this.left = left;
        this.right = right;
    }
    interpreter(context){
        return this.left.interpreter(context) || this.right.interpreter(context);
     }
}
// 具体表达式 not
class NotExpression extends RuleExpression{
    constructor(expression){
        super();
        this.expression = expression;
    }
    interpreter(context){
        return !this.expression.interpreter(context);
    }
}

// 上下文
class RuleContxt {
    constructor(data) {
        this.data = data;
    }
    get(key){
        return this.data[key];
    }
}

const context = new RuleContxt({
    a: true,
    b: false,
    c: true
});

const rule = new AndExpression(new OrExpression(new NotExpression(new RuleExpression('a')), new RuleExpression('b')), new RuleExpression('c'));
console.log(rule.interpreter(context)); // true