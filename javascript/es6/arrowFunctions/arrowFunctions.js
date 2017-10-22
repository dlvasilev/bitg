'use strict';

/**
 * arrowFunctions
 */

/**
 * Section 1
 */
// ES5
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// ES6
const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(1, 2));


const addArrowImplicitReturn = (a, b) => a + b;
console.log(addArrowImplicitReturn(1, 2));

/**
 * Section 2
 */
const double = number => 2 * number;
console.log(double(8));

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(number => 2 * number);
console.log(doubledNumbers);

/**
 * Section 3
 */
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
console.log(team.teamSummary());

/**
 * Exercises
 */

/**
 * 1. Refactoring Keyword Functions
 * 
 * Refactor the code below to use a fat arrow function.
 */
const fibonacci = function (n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciRef = n => {
    if (n < 3) return 1;
    return fibonacciRef(n - 1) + fibonacciRef(n - 2);
}


/**
 * 2. Arrow Functions Aren't Always a Solution
 * 
 * Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  
 * The code below has an object that represents a users profile.  The profile has a 'name' currently. 
 * Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.
 * 
 *  Does the solution work with a fat arrow function or will you have to use a function keyword instead?
 */
const profile = {
    name: 'Alex'
};

const profileArrow = {
    name: 'Alex',
    // getName: () => this.name // this is undefined : Cannot read property 'name' of undefined
};

const profileFunc = {
    name: 'Alex',
    getName: function () {
        return this.name
    }
};