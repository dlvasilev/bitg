'use strict';

/**
 * arrayHelperMethods
 * 
 * forEach
 */

/**
 * Section 1
 */
var colors = ['red', 'blue', 'green'];

console.log('Normal \'for\' loop => ')
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('\'forEach\' loop => ')
colors.forEach(function (color) {
    console.log(color);
});

console.log('\'forEach\' with \'arrow\' function => ')
colors.forEach((color) => {
    console.log(color)
});

/**
 * Section 2
 */
// Create and array of number
var numbers = [1, 2, 3, 4, 5];

// First Road

// Create a variable to hold the sum
var sumOne = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function (number) {
    sumOne += number;
});
// Print the sum variable
console.log(sumOne);

// Second Road

// Create a variable to hold the sum
var sumTwo = 0;

function adder(number) {
    sumTwo += number;
}
// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// Print the sum variable
console.log(sumTwo);
