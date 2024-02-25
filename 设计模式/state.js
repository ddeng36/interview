// 状态模式
// 允许对象内部状态改变时，改变行为

// 接口
class DocumentState {
    constructor(document) {
        this.document = document;
    }
    edit () {
        throw new Error('子类必须实现此方法');
    }
    review () {
        throw new Error('子类必须实现此方法');
    }
    publish () {
        throw new Error('子类必须实现此方法');
    }
}

// 草稿状态
class DraftState extends DocumentState {
    edit () {
        console.log('编辑文档');
        this.document.setState(new DraftState(this.document));
    }
    review () {
        console.log('评审文档');
        this.document.setState(new ReviewState(this.document));
    }
    publish () {
        console.log('文档不能发布');
    }
}
// 审核状态
class ReviewState extends DocumentState {
    edit () {
        console.log('文档不能编辑');
    }
    review () {
        console.log('文档不能评审');
    }
    publish () {
        console.log('发布文档');
        this.document.setState(new PublishState(this.document));
    }
}
// 发布状态
class PublishState extends DocumentState {

    edit () {
        console.log('文档不能编辑');
    }
    review () {
        console.log('文档不能评审');
    }
    publish () {
        console.log('文档不能发布');
    }
}

// 文档
class Document{
    constructor() {
        this.state = new DraftState(this);
    }
    setState(state) {
        this.state = state;
    }
    edit () {
        this.state.edit();
    }
    review () {
        this.state.review();
    }
    publish () {
        this.state.publish();
    }
}

const document = new Document();
document.edit();
document.publish();
document.review();
document.edit();
document.publish();
document.edit();
document.review();
