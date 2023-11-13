// 命令模式
// 将请求封装成对象，以便使用不同的请求、队列或者日志来参数化其他对象。命令模式也支持可撤销的操作。
// 1. 命令模式的意图是把请求封装为对象，从而分离请求的发起者和请求的接收者。

// 接收者   
class TV {
    turnOn() {
        console.log('turn on');
    }
    turnOff() {
        console.log('turn off');
    }
}

// 命令
// 命令的接口
class Command{
    excute(){}
}
// 开机命令
class TurnOnCommand extends Command{
    constructor(tv){
        super();
        this.tv = tv;
    }
    execute(){
        this.tv.turnOn();
    }
}
// 关机命令
class TurnOffCommand extends Command{
    constructor(tv){
        super();
        this.tv = tv;
    }
    execute(){
        this.tv.turnOff();
    }
}

// 命令者
class RemoteController{
    constructor(){
        this.command = null;
    }
    setCommand(command){
        this.command = command;
    }
    pressButton(){
        this.command.execute();
    }
}

const tv = new TV();
const turnOnCommand = new TurnOnCommand(tv);
const turnOffCommand = new TurnOffCommand(tv);
const remoteController = new RemoteController();

remoteController.setCommand(turnOnCommand);
remoteController.pressButton(); // turn on

remoteController.setCommand(turnOffCommand);
remoteController.pressButton(); // turn off