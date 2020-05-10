//1) create a class of flowers create instance
// of diffrent types of flowers (with property smell, color, 
//height (cm), isCultured). with methods, of growFlower(by how many cm)

class Flower{
    constructor(name, smell, color, height, isCultured){
    this.name = name;
    this.smell = smell;
    this.color = color;
    this.height = height;
    this.isCultured = isCultured;
    }
    growFlower() {
        let finalGrowth = this.height * 1.5
        return finalGrowth
    }
    
}

let rose = new Flower ("Rose", "sweet", "red", 50, true);

let maxHeight = rose.growFlower();


console.log(rose);

console.log(`Maximum Rose growth is ${maxHeight}cm`);

let sunflower = new Flower ("Sunflower", "sour", "yellow", 70, true);

let maxHeight2 = sunflower.growFlower();


console.log(sunflower);

console.log(`Maximum Sunflower growth is ${maxHeight2}cm`);

//2) create a class of Cars, with (name, brand, maximum speed, price), 
//with methods accelrate, stop (which will return final speed)

class Car{
    constructor(name, brand, maximumSpeed, price){
    this.name = name;
    this.brand = brand;
    this.maximumSpeed = maximumSpeed;
    this.price = price;
    }
    accelerate(){
        let max = this.maximumSpeed * 1
        return max;
    }

    stop(){
        let min = this.maximumSpeed * 0
        return min;
    }
}

let myCar = new Car("Toyota", "Corolla", 240, 25000);
console.log(myCar);

let maxSpeed = myCar.accelerate();
console.log(`Maximum speed for Toyota Corolla is ${maxSpeed}`);

let minSpeed = myCar.stop();
console.log(`Minimum speed for Toyota Corolla is ${minSpeed}`);


let yourCar = new Car("Honda", "Accord", 260, 27000);
console.log(yourCar);

let maxSpeed2 = yourCar.accelerate();
console.log(`Maximum speed for Honda Accord is ${maxSpeed2}`);

let minSpeed2 = yourCar.stop();
console.log(`Minimum speed for Honda Accord is ${minSpeed2}`);

//3) create Class students, with name, suraname, avg-grade, with methods
// of adding an a grade (gerade and course), method to calculate avarage 
// grade. create 4 students, and give them grades, and calculate their 
// avarge grades.

class Student{
    constructor(firstName, lastName, averageGrade, grades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.averageGrade = averageGrade;
        this.grades = grades;
    }
    addGrade(){

    }
    calcAvgGrade(){

    }
}

let studentOne = new Student("John", "Smith", 90);
console.log(studentOne);

let studentTwo = new Student("Lauren", "Mead", 85);
console.log(studentTwo);

let studentThree = new Student("Jennifer", "Colton", 80);
console.log(studentThree);

let studentFour = new Student ("Andrew", "Johnson", 95);
console.log(studentFour);
