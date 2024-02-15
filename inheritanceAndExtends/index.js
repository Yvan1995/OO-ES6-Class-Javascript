
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe () {
        console.log(`I am ${this.name} and i am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age);

        //custom behavior
        this.yearsOfExperience = _yearsOfExperience;
    }

    code () {
        console.log(`${this.name} is coding...`);
    }
}

let person1 = new Person('Yvan', 28);
let programmer1 = new Programmer('Yvan', 28, 4) 

programmer1.code();
console.log(person1);
console.log(programmer1);

function developSoftware (programmers) {
    //develop sft
}