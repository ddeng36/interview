// 桥接模式
// 分离抽象和实现，使得两者可以独立变化

class Device {
    constructor() {
        this.state = 'off';
    }
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    turnOn(){
        this.state = 'on';
    }
    turnOff(){
        this.state = 'off';
    }
}

class TV extends Device {
    turnOn() {
        console.log('tv turn ' + this.state);
        super.turnOn();
    }
    turnOff() {
        console.log('tv turn ' + this.state);
        super.turnOff();
    }
}

class Radio extends Device {
    turnOn() {
        console.log('r turn ' + this.state);
        super.turnOn();
    }
    turnOff() { 
        console.log('r turn ' + this.state);
        super.turnOff();
    }
}

class RemoteController {
    constructor(device) {
        this.device = device;
    }
    turnOn() {
        this.device.turnOn();
    }
    turnOff() {
        this.device.turnOff();
    }
}

const tv = new TV();
const radio = new Radio();

const remoteController = new RemoteController(tv);
const remoteController2 = new RemoteController(radio);

remoteController.turnOn(); // tv turn on
remoteController.turnOff(); // tv turn off
remoteController2.turnOn(); // r turn on
remoteController2.turnOff(); // r turn off
