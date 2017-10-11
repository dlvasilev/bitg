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

console.log('\'map\' helper => ')
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

/**
 * Exercises
 */

/**
 * 1. Plucking Values
 * 
 * Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.
 */
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights = images.map(function (image) {
    return image.height;
});
console.log('Image heights: ');
console.log(heights);

/**
 * 2. Calculating Values with Map
 * 
 *  Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value. 
 */
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds = trips.map(function (trip) {
    return trip.distance / trip.time;
});
console.log('DistanceAgainstTimeOfTrips (speeds): ');
console.log(speeds);


/**
 * 3. Implementing 'Pluck'
 * 
 * Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
 */
var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
var paintWithColor;

function pluck(array, property) {
    return array.map(function (element) {
        return element[property];
    });
}

paintWithColor = pluck(paints, 'color');
console.log('PaintWithColor: ');
console.log(paintWithColor);