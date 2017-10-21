'use strict';

/**
 * arrayHelperMethods
 * 
 * reduce
 */

/**
 * Section 1
 */
var numbers = [10, 20, 30];
var sum = 0;

console.log('Normal \'for\' loop => ');
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

console.log('\'reduce\' helper => ');
var sumReduce = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log('sumReduce: ' + sumReduce);

/**
 * Section 2
 */
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var colors = [];
colors = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, colors);
console.log('colors: ');
console.log(colors);

/**
 * Section 3
 */
function balancedParens(string) {
    return !string.split('').reduce(function (previous, char) {
        if (previous < 0) { return previous }
        if (char === '(') { return ++previous }
        if (char === ')') { return --previous }
        return previous;
    }, 0);
}
console.log('balanced: ' + balancedParens('()()()()()(((())))'));
console.log('unbalancedOne: ' + balancedParens(')('));
console.log('unbalancedTwo: ' + balancedParens('(((())))))))))'));

/**
 * Exercises
 */

/**
 * 1. Distance Traveled
 * 
 * Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
 */
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(distance, trip) {
    return distance + trip.distance;
}, 0);

console.log('totalDistance = '+ totalDistance);

/**
 * 2. Reducing Properties
 * 
 * Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'. 
 */
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function(obj, desk) {
    obj[desk.type] += 1;
    return obj;
}, { sitting: 0, standing: 0 });

console.log('deskTypes: ');
console.log(deskTypes);

/**
 * 3.  Custom 'Unique' Helper
 * 
 * Write a function called 'unique' that will remove all the duplicate values from an array.
 */
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function(newArray, element) {
        if (newArray.indexOf(element) < 0)
            newArray.push(element)
        return newArray;
    }, []);
}

console.log('uniqueNumbers: ');
console.log(unique(numbers));