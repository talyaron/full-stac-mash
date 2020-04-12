// one of the most coomon ways to store and use data

let person = {
    name: "Masha", //property
    surename: "Alercon",
    address: 'Hafia',
    sayHello: function () { console.log(`Hi ${this.name}`) } //method (a function)
}

console.log(person.name)
person.sayHello()
person.name = 'M';
person.sayHello()

class Person {
    constructor(name, surname, address) {
        this.name = name;
        this.surename = surname
        this.address = address;
    }

    sayHello() {
        console.log(`Hi from class to ${this.name}`)
    }

    sayAddress() {
        if (this.address !== undefined) {
            console.log(`${this.name} address is ${this.address}`)
        } else {
            console.log(`${this.name} don't have an address, please add one`);
        }
    }
}

let masha = new Person("Masha", "Alercon");

masha.sayHello();
masha.sayAddress();
let lidia = new Person("Lidia", "Ivanitzki");
lidia.sayHello();

console.dir(masha)

console.log(masha.hasOwnProperty('age'));