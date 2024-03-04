var Person = (function() {

    var privateData = new WeakMap();

    function Person(name) {
        privateData.set(this, { name: name });
    }

    Person.prototype.getName = function() {
        return privateData.get(this).name;
    };

    return Person;
}());

const p = new Person('Alice');
console.log(p.name); // undefined
console.log(p.getName()); // Alice