// 迭代器模式
// 提供一种方法顺序访问一个聚合对象中各个元素, 而又不暴露其内部的表示

// 抽象类
class Iterator {
    constructor(Collection) {
        this.collection = Collection;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.collection.items.length;
    }
    next() {
        return this.collection.items[this.index++];
    }
}

// 具体类
class ArrayIterator extends Iterator {
    constructor(collection) {
        super(collection);
    }
}

class Collection {
    constructor() {
        this.items = [1,1,2,3,5];
    }

    getIterator() {
        return new ArrayIterator(this);
    }
}

const collection = new Collection();
const iterator = collection.getIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}