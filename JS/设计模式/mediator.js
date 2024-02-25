// 中介者模式
// 中介者模式的作用就是解除对象与对象之间的紧耦合关系。
// 增加一个中介者对象后，所有的相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，

class ChatRoom {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    sendMessage(message, sender) {
        for(const user of this.users) {
            if(user !== sender) {
                user.receiveMessage(message);
            }
        }
    }
}

class User {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
        this.chatRoom.addUser(this);
    }
    sendMessage(message) {
        this.chatRoom.sendMessage(message, this);
        console.log(`${this.name} send message: ${message}`)
    }
    receiveMessage(message) {
        console.log(`${this.name} receive message: ${message}`);
    }
}

const chatRoom = new ChatRoom();
const user1 = new User('user1', chatRoom);
const user2 = new User('user2', chatRoom);
const user3 = new User('user3', chatRoom);

user1.sendMessage('hello'); // user2 receive message: hello user3 receive message: hello
user2.sendMessage('world'); // user1 receive message: world user3 receive message: world
user3.sendMessage('hi'); // user1 receive message: hi user2 receive message: hi