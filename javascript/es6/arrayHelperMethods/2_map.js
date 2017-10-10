'use strict';

/**
 * arrayHelperMethods
 * 
 * map
 */

/**
 * Section 1
 */
var numbers = [1, 2, 3];
var doubledNumbers = [];

console.log('Normal \'for\' loop => ')
for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

console.log('\'map\' loop => ')
var doubled = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled);

/**
 * Section 2
 * 
 * Loop over array of objects and build a new array with specific prop's values
 */
var cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);