// 组合模式
// 用树状结构表示对象

// 抽象类 
class Organization {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}

class Department extends Organization{
    add(organization){
        this.children.push(organization);
    }
    remove(organization){
        this.children = this.children.filter(item => item !== organization);
    }
    display(){
        console.log(this.name);
        this.children.forEach(item => {
            item.display();
        })
    }
}

class Company extends Organization {
    add(organization){
        this.children.push(organization);
    }
    remove(organization){
        this.children = this.children.filter(item => item !== organization);
    }
    display(){
        console.log(this.name);
        this.children.forEach(item => {
            item.display();
        })
    }
}

const company = new Company('公司');
const department = new Department('A部门');
const department2 = new Department('B部门');
const subDepartment = new Department('B-1部门');
company.add(department);
company.add(department2);
department2.add(subDepartment);

company.display();