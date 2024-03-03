// 备忘录
// 用于存储对象的某个状态，以便在适当的时候恢复对象

class TextMemento{
    constructor(text){
        this.text = text;
    }
    getText(){
        return this.text;
    }
}

class TextEditor{
    constructor(){
        this.text = "";
    }
    setText(text){
        this.text = text;
    }
    getText(){
        return this.text;
    }
    createMemento(){
        return new TextMemento(this.text);
    }
    restoreFromMemento(memento){
        this.text = memento.getText();
    }
}


class TextEditorMemento{
    constructor(){
        this.mementos = [];
    }
    addMemento(memento){
        this.mementos.push(memento);
    }
    getMemento(index){
        return this.mementos[index];
    }
}

const textEditor = new TextEditor();
const textEditorMemento = new TextEditorMemento();

textEditor.setText('hello');
textEditorMemento.addMemento(textEditor.createMemento());
console.log(textEditor.getText());

textEditor.setText('world');
textEditorMemento.addMemento(textEditor.createMemento());
console.log(textEditor.getText());

textEditor.restoreFromMemento(textEditorMemento.getMemento(0));
console.log(textEditor.getText());
