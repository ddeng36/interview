// 访问者模式
// 封装一系列的操作，这些操作在不改变对象结构的前提下进行操作

// 抽象元素类：形状
class Shape {
    accept() {
        throw new Error('abstract method')
    }
}
// 具体元素类：矩形
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    accept(visitor) {
        visitor.visitRectangle(this);
    }
}
// 具体元素类：圆形
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    accept(visitor) {
        visitor.visitCircle(this);
    }
}

// 抽象访问者 
class Visitor{
    visitRectangle(rectangle){};
    visitCircle(circle){};
}
// 具体访问者：计算面积
class AreaVisitor extends Visitor {
    constructor(){
        super();
        this.totalArea = 0;
    }
    visitRectangle(rectangle){
        this.totalArea += rectangle.length * rectangle.width;
    }
    visitCircle(circle){
        this.totalArea += Math.PI * circle.radius * circle.radius;
    }
    getTotalArea(){
        return this.totalArea;
    }
}

const shapes = [new Rectangle(2,3), new Circle(4)];
const areaVisitor = new AreaVisitor();
shapes.forEach(shape => {
    shape.accept(areaVisitor);
})
console.log(areaVisitor.getTotalArea()); 