// 适配器模式
class OldSystem {
    OldRequest() {
        return 'old system';
    }
}
class newSystem {
    request() {
        return 'new system';
    }
}
class Adapter {
    constructor() {
        this.oldSystem = new OldSystem();
    }
    request() {
        return this.oldSystem.OldRequest();
    }
}

// 客户端代码
const clientCall = function (system) {
    console.log(system.request());
}

// 调用适配器而非老系统
clientCall(new Adapter());

clientCall(new newSystem());

