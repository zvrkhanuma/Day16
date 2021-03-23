// Only change code below this line
class Pets {
    constructor(name, legs){
        this.name = name;
        this.legs = legs;
    }
    walk(){
        var numberOfLegs = this.name+" is walking on "+this.legs+" legs";
        // console.log(numberOfLegs);
        return numberOfLegs; 
    }
}
class Dog extends Pets {
    constructor(name, legs){
    super(name, legs);
    }   
    bark() {
        var dogSay = this.name+" says WUF-WUF";
        return dogSay;
    }
}
// // Only change code above this line
let dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
    Pets,
    Dog,
}
