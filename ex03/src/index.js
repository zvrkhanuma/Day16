// Only change code below this line
class Person {
    static display() {
        return "Static method is invoked from Person class";
    }
    show() {
        return Person.display(); 
    }
}

// Only change code above this line
var message = new Person();
message.show();
console.log(message.show());
module.exports = Person;