// Only change code below this line
class Microsoft{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    occupation() {
        return this._name+" is a philanthropist!"
    }
}
class Facebook extends Microsoft{
    constructor(name, age) {
        super(name)
        this._age = age;
    }
    get age() {
        return this._age;
      }
      
      set age(value) {
        this._age = value;
      }
    studentAge() {
        return this.name+" is "+this.age;
    }
}
var henry = new Microsoft('William Henry Gates III');
  console.log(henry.occupation());
  var elliot = new Facebook('Mark Elliot Zuckerberg', 23);
  console.log(elliot.occupation());
  console.log(elliot.studentAge());
// Only change code above this line
module.exports = {
    Microsoft,
    Facebook
}