// 用于创建复杂对象，将对象的构建过程分解为多个步骤

// Product : 要构建的复杂对象
class Computer {
    constructor() {
        this.cpu = ''
        this.memory = ''
        this.hardDisk = ''
    }
    toString() {
        return `cpu: ${this.cpu}, memory: ${this.memory}, hardDisk: ${this.hardDisk}`
    }
}

// Builder : 构建复杂对象的接口
class ComputerBuilder {
    constructor() {
        this.computer = new Computer()
    }
    setCpu(cpu) {
        this.computer.cpu = cpu
        return this
    }
    setMemory(memory) {
        this.computer.memory = memory
        return this
    }
    setHardDisk(hardDisk) {
        this.computer.hardDisk = hardDisk
        return this
    }
    build() {
        return this.computer
    }
}

// ConcreteBuilder : 具体的构建者
class ConcreteComputerBuilder extends ComputerBuilder {
    construct(builder) {
        return builder.setCpu('i7').setMemory('16g').setHardDisk('1t').build();
    }
}

const concreteBuilder = new ConcreteComputerBuilder();
const builder = new ComputerBuilder();

const computer = concreteBuilder.construct(builder);
console.log(computer.toString());

const costomComputer = builder.setCpu('i5').setMemory('8g').setHardDisk('500g').build();
console.log(costomComputer.toString());

console.log(computer.toString())
