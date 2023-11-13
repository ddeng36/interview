// 责任链模式
// 让多个对象都有机会依次处理请求。js的原型链和冒泡机制就是责任链模式的体现

class Approver{
    constructor(name){
        this.name = name;
        this.nextApprover = null;
    }
    setNextApprover(approver){
        this.nextApprover = approver;
    }
    approveRequest(amount) {
        if(this.canApprove(amount)){
            console.log(`${this.name} approved request ${amount}`);
        }
        else if(this.nextApprover){
            this.nextApprover.approveRequest(amount);
        }
        else{
            console.log('request not approved');
        }
    }
}

class Supervisor extends Approver{
    canApprove(amount){
        return amount <= 1000;
    }
}

class Director extends Approver{
    canApprove(amount){
        return amount <= 5000;
    }
}

class President extends Approver{
    canApprove(amount){
        return amount <= 10000;
    }
}

const supervisor = new Supervisor('supervisor');
const director = new Director('director');
const president = new President('president');
supervisor.setNextApprover(director);
director.setNextApprover(president);

supervisor.approveRequest(500); // supervisor approved request 500
supervisor.approveRequest(5000); // director approved request 5000
supervisor.approveRequest(10000); // president approved request 10000