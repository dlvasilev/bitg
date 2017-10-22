'use strict';

/**
 * Rest and Spread Operator
 */

/**
 * Section 1
 */
function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
console.log('addNumbers([1, 2, 3, 4, 5])');
console.log(addNumbers([1, 2, 3, 4, 5]));

// ... rest operator
function addNumbersRest(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
console.log('addNumbersRest(1, 2, 3, 4, 5)');
console.log(addNumbersRest(1, 2, 3, 4, 5));

/**
 * Section 2
 */
const defaultColors = ['red', 'green'];
const userFavouriteColors = ['orange', 'yellow'];

console.log('defaultColors.concat(userFavouriteColors)');
console.log(defaultColors.concat(userFavouriteColors));

console.log('[ defaultColors, userFavouriteColors ]');
console.log([defaultColors, userFavouriteColors]);

// ... spread operator
console.log('[ ...defaultColors, userFavouriteColors ]');
console.log([...defaultColors, userFavouriteColors]);
console.log('[ ...defaultColors, ...userFavouriteColors ]');
console.log([...defaultColors, ...userFavouriteColors]);

const fallColors = ['fire red', 'fall orange'];
console.log('[ ...fallColors, ...defaultColors, ...userFavouriteColors ]');
console.log([...fallColors, ...defaultColors, ...userFavouriteColors]);

console.log('[ \'blue\', ...fallColors, ...defaultColors, ...userFavouriteColors ]');
console.log(['blue', ...fallColors, ...defaultColors, ...userFavouriteColors]);

// Rest and spread
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

console.log("validateShoppingList('oranges', 'bread', 'eggs')");
console.log(validateShoppingList('oranges', 'bread', 'eggs'));

/**
 * Section 3
 */
const MathLibrary = {
    calculateProduct(a, b) {
        return a * b;
    },
    multiply(a, b) {
        return a * b;
    }
};

const MathLibraryTwo = {
    calculateProduct(...rest) {
        console.log('Please use the \'multiply\' method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};

/**
 * Exercises
 */

/**
 * 1. Many, Many Arguments
 * 
 * Refactor the following function to use the rest operator.
 */

// function product(a, b, c, d, e) {
//     var numbers = [a, b, c, d, e];

//     return numbers.reduce(function (acc, number) {
//         return acc * number;
//     }, 1)
// }

function product(...numbers) {
    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1);
}

/**
 * 2. Spreadin' Arrays
 * 
 * Refactor the following to use the spread operator.
 */

// function join(array1, array2) {
//     return array1.concat(array2);
// }

function join(array1, array2) {
    return [...array1, ...array2];
}

/**
 * 3. Mixing Rest and Spread
 * 
 * Refactor the following to use the only the rest operator
 */

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }

function unshift(array, ...params) {
    return [...params, ...array];
}