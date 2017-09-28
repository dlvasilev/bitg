/**
 * #1: I need to go over an array and get a single value as a result
 *
 * Given an array of numbers, return the sum of its elements.
 */

const numbers = [5, 25, 8, 18];

// (Original One) =>  Create a temporary variable, initialise it with zero and
// using a for loop iterate over the array returning the final value of the
// variable. There are some problems though: For something as simple as a sum of
// an array, 7 lines of code seem quite a lot.
const sumOne = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
        result += array[i];
    }
    return result;
}
console.log('sumOne = ' + sumOne(numbers));

// (Reduced One) => The solution that remedies both those problems is to use the
// reduce function (in other languages also called fold or aggregate). In a
// single expression we iterate over each of the array elements adding them
// together (stating the sum’s default and initial value is zero)
const sumTwo = (array) => array.reduce((total, current) => total + current, 0);
console.log('sumTwo = ' + sumTwo(numbers));

/**
 * #2: I need to create a new array from a given one and transform all the elements
 *
 * Given the array of prices, return a new array with the prices n % lower.
 */
const prices = [5, 25, 8, 18];

// (Original One) => In order to not destroy the input array, we must clone it
// first and then transform the values in the new array. This can easily be
// forgotten introducing a potentially unwanted side effect in the application.
const discountOne = (originalPrices, discountAmount) => {
    const multiplier = 1 - discountAmount;

    let result = new Array(originalPrices);
    for (let i = 0; i < originalPrices.length; i += 1) {
        result[i] = originalPrices[i] * multiplier;
    }
    return result;
}
console.log('discountOne = [' + discountOne(prices, 0.2) + ']');

// (Reduced One) => The cloning problem can be avoided altogether using the map
// function. For a given array it returns a new array where each element is the
// corresponding element in the original array transformed using the provided
// function
const discountTwo = (originalPrices, discountAmount) => {
    const multiplier = 1 - discountAmount;
    return originalPrices.map(price => price * multiplier);
}
console.log('discountTwo = [' + discountTwo(prices, 0.2) + ']');

/**
 * #3: I need the numbers from m to n
 *
 * Return an array of the first n squares
 */
// (Original One) => The first naïve solution suffers from the problem that it
// pushes a new element to an array every iteration. This expands the array and
// may cause it to reallocate in memory being slow
const squaresBad = (n) => {
    let result = [];
    for (let i = 1; i <= n; i += 1) {
        result.push(i * i);
    }
    return result;
}
console.log('squaresBad = [' + squaresBad(5) + ']');

// (Original One) => The second approach instantiates the array of correct size
// beforehand avoiding this problem, but we can easily make a mistake when
// assigning the current value result[i - 1].
const squaresOne = (n) => {
    let result = new Array(n);
    for (let i = 1; i <= n; i += 1) {
        result[i - 1] = i * i;
    }
    return result;
}
console.log('squaresOne = [' + squaresOne(5) + ']');

// Reduced One
const lodashRange = require("lodash.range");
const squaresLodash = (n) => lodashRange(1, n + 1).map((n) => n * n);
console.log('squaresLodash = [' + squaresLodash(5) + ']');

const squaresTwo = (n) => Array
    .apply(null, Array(n))
    .map((_, n) => (n + 1) * (n + 1));
console.log('squaresTwo = [' + squaresTwo(5)) + ']';

const squaresTwoES6 = (n) => [...Array(n).keys()].map((n) => (n + 1) * (n + 1));
console.log('squaresTwoES6 = [' + squaresTwoES6(5) + ']');

/**
 * #4: I need to do something with side effects n times
 *
 * Console.log the string “Hello world” n times
 */

//Original One
const doNTimesOne = (n, f) => {
    for (let i = 1; i <= n; i += 1) {
        f(i);
    }
}
console.log('doNTimesOne:');
doNTimesOne(5, x => console.log('Hello World!'));

const doNTimesTwo = (n, f) => {
    const body = (m) => {
        if (m > n) 
            return;
        f(m);
        return body(m + 1);
    }
    return body(1);
}
console.log('doNTimesTwo:');
doNTimesTwo(5, x => console.log('Hello World!'));