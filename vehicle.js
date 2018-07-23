/*
    Assignment:  Create a class of vehicle. That class should have at least 5 attribute and 5 methods.
    Test that the class and attributes are working.
*/

class Vehicle{
    constructor(color, make, model, year, numberOfWheels){
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.numberOfWheels = numberOfWheels;
    }
    startCar(){
        return 'Vehicle Started...';
    }
    changeGear(num){
        return `changing gear to ${num}`;
    }
    changeDirection(direction){
        return `Vehicle turning to ${direction}`;
    }
    break(){
        return 'Break applied....';
    }
    turnOff(){
        return 'vehicle has been turned off.';
    }
}

let Car = new Vehicle("Blue", "Toyota", "Camry", "2018", 4);
console.log(`Color is ${Car.color}`);
console.log(`Make is ${Car.make}`);
console.log(`Model is ${Car.model}`);
console.log(`Year is ${Car.year}`);
console.log(`Number of wheel is ${Car.numberOfWheels}`);
console.log(Car.startCar());
console.log(Car.changeGear());
console.log(Car.changeDirection());
console.log(Car.break());
console.log(Car.turnOff());