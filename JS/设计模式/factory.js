// 用于创建一系列产品线的工厂，封装创建对象的逻辑
// 优点：将创建对象的逻辑封装起来，使得代码更加灵活，易于维护
// 缺点：增加了系统的复杂度，增加了系统的抽象性和理解难度
class Circle {
    draw() {
        console.log('draw circle');
    }
}
class Rectangle {
    draw() {
        console.log('draw rectangle');
    }
}
class ShapeFactory {
    createShape(type) {
        if(type === 'circle') {
            return new Circle();
        } else if(type === 'rectangle') {
            return new Rectangle();
        }
        return null;
    }
}

const shapeFactory = new ShapeFactory();
const circle = shapeFactory.createShape('circle');
const rectangle = shapeFactory.createShape('rectangle');
const shape = shapeFactory.createShape('circle');
circle.draw();
rectangle.draw();
shape.draw();