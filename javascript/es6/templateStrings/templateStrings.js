'use strict';

/**
 * templateStrings || templateLiterals
 */

/*
 * Section 1
 */

// ES5
function getMessage() {
    var year = new Date().getFullYear();

    return 'The year is ' + year;
}

console.log(getMessage());

// ES6
function getMessage() {
    const year = new Date().getFullYear();

    // return `The year is ${year}`;
    // return `The year is ${year + 1}`;
    // return `The year is ${year * 2}`;
    return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());


/**
 * Section 2
 */
const deviceId = 5;
const guid = 20;
const username = 'hello';

const data = '{"device_id":"' + deviceId + '","guid":"' + guid + '","username":"' + username + '"}';

console.log(data);

const dataTwo = `{ "device_id" : "${deviceId}", "guid" : "${guid}", "username" : "${username}" }`;
console.log(dataTwo);


/**
 * Exercises
 */

/**
 * 1. Template Strings in Practice
 * 
 * Refactor the function to use template strings
 */
function doubleMessage(number) {
    return "Your number doubled is " + (2 * number);
}

console.log(doubleMessage(5));

function doubleMessageRefactured(number) {
    return `Your number doubled is ${2 * number}`;
}
console.log(doubleMessageRefactured(5));

/**
 * 2. Name Helpers
 * 
 * Refactor the function to use template strings
 */
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(fullName('Daniel', 'Vasilev'));

function fullNameRefactured(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullNameRefactured('Daniel', 'Vasilev'));