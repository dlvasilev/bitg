'use strict';

/**
 * classes
 */

/**
 * Section 1
 */
// Constructor func
function CarES5(options) {
    this.title = options.title;
}
CarES5.prototype.drive = function () {
    return 'Vroom';
}

const carES5 = new CarES5({ title: 'Focus' });
console.log(carES5);
console.log(carES5.drive());

function ToyotaES5(options) {
    CarES5.call(this, options);
    this.color = options.color;
}
ToyotaES5.prototype = Object.create(CarES5.prototype);
ToyotaES5.prototype.construcor = ToyotaES5;
ToyotaES5.prototype.honk = function () {
    return 'beep';
}

const toyotaES5 = new ToyotaES5({ color: 'red', title: 'Daily Driver' });
console.log(toyotaES5);
console.log(toyotaES5.drive());
console.log(toyotaES5.honk());

// ES6
class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'Vroom';
    }
}

const car = new Car({ title: 'Toyota' });
console.log(car);
console.log(car.drive());

class Toyota extends Car {
    constructor(options) {
        super(options); // Car.constructor(options)
        this.color = options.color;
    }
    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({ color: 'red', title: 'Daily driver' });
console.log(toyota);
console.log(toyota.honk());

/**
 * Exercises
 */

/**
 * 1. Game Classes
 * 
 * You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 
 * Initialize the Monster's health to 100.
 * The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster
 */
class Monster {
    constructor({ name }) {
        this.health = 100;
        this.name = name
    }
}

/**
 * 2. Subclassing Monsters
 * 
 * Now that you have a monster created, create a subclass of the Monster called Snake.  
 * The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
 * The instance of Snake that is passed in should have their health deducated by 10
 */
class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(snake) {
        snake.health -= 10;
    }
}