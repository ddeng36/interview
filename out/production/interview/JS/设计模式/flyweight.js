// 享元模式
class Icon {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
    render(x, y) {
        console.log(`render ${this.name} at ${x}, ${y}`);
    }
}

class IconFactory{
    constructor(){
        this.icons = {};
    }
    getIcon(name, path){
        if(!this.icons[name]){
            console.log('create new icon'+ name);
            this.icons[name] = new Icon(name, path);
        }
        return this.icons[name];
    }
}

const iconFactory = new IconFactory();
const icon1 = iconFactory.getIcon('icon1', 'path1');
const icon2 = iconFactory.getIcon('icon2', 'path2');
const icon3 = iconFactory.getIcon('icon1', 'path1');

icon1.render(1,2);
icon2.render(3,4);
