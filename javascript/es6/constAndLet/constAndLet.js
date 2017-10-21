'use strict';

/**
 * constAndLet
 */

var color = 'red';
console.log('Normal var = ');
console.log(color);

/**
 * Section 1
 */
// ES5
// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

// ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// name = 'Janet'; // TypeError: Assignment to constant variable.

// But you can do this
title = 'Senior Software Engineer';
hourlyWage = 45;

/**
 * Section 2
 */
function count(targetString) {
    var characters = ['a', 'e', 'i', 'o', 'u'];
    var number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }

    return number;
}

console.log('count: ');
console.log(count('aeiobzxceiaipbiox'));

function countTwo(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (let i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }

    return number;
}

console.log('countTwo: ');
console.log(countTwo('aeiobzxceiaipbiox'));

/**
 * Section 3
 */

// Original Code
// function buildExtressionsOne(code) {
//     var transformedCode = JSXTransformer.transform(code).code;
//     var codeByLine = transformedCode.split('\n');
//     var tokenized = esprima.tokenize(transformedCode, { loc: true });
//     var parens = { '(': 0, '{': 0, '[': 0 };
//     var wasOpen = false;

//     var exp = _.reduce(tokenized, (expressions, { value, loc: { end } }, index) => {
//         var lineNumber = end.line;
//         var lineContents = codeByLine[lineNumber - 1];
//         var lineHasMoreDelimiters = this.lineHasMoreDelimiters(end, lineContents);
//         var endOfLine = end.column === lineContents.length;

//         if(expressions[lineNumber]) { return expressions; }

//         if(OPEN_DELIMITERS.includes(value)) {
//             parents[value] += 1;
//             wasOpen = true;
//         }

//         if(CLOSE_DELIMITERS.includes(value)) {
//             parents[DELIMITER_MAP[value]] -= 1;
//         }

//         if(!lineHasMoreDelimiters && wasOpen && _.every(parens, count => count === 0)) {
//             wasOpen = false;
//             expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

//             return expressions;
//         }

//         if(!lineHasMoreDelimiters && _.every(parens, count => count === 0)) {
//             expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

//             return expressions;
//         }

//         return expressions;
//     }, {});
// }

// Const/Let featured code
// function buildExtressionsTwo(code) {
//     const transformedCode = JSXTransformer.transform(code).code;
//     const codeByLine = transformedCode.split('\n');
//     const tokenized = esprima.tokenize(transformedCode, { loc: true });
//     const parens = { '(': 0, '{': 0, '[': 0 };
//     let wasOpen = false;

//     var exp = _.reduce(tokenized, (expressions, { value, loc: { end } }, index) => {
//         const lineNumber = end.line;
//         const lineContents = codeByLine[lineNumber - 1];
//         const lineHasMoreDelimiters = this.lineHasMoreDelimiters(end, lineContents);
//         const endOfLine = end.column === lineContents.length;

//         if(expressions[lineNumber]) { return expressions; }

//         if(OPEN_DELIMITERS.includes(value)) {
//             parents[value] += 1;
//             wasOpen = true;
//         }

//         if(CLOSE_DELIMITERS.includes(value)) {
//             parents[DELIMITER_MAP[value]] -= 1;
//         }

//         if(!lineHasMoreDelimiters && wasOpen && _.every(parens, count => count === 0)) {
//             wasOpen = false;
//             expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

//             return expressions;
//         }

//         if(!lineHasMoreDelimiters && _.every(parens, count => count === 0)) {
//             expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

//             return expressions;
//         }

//         return expressions;
//     }, {});
// }

/**
 * Exercises
 */

/**
 * 1. A Constant Exercise of Letting Variables Be Variables
 * 
 * Imagine that you are building an application to manage a user's Facebook profile.  A profile might have a 'name', 'age', and 'dateOfBirth'.
 * Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.
 */
const name = 'John';
const dateOfBirth = '10/10/2010';
let age = 17;

/**
 * 2. Const/Let Refactoring
 * 
 * The following code uses 'var' instead of 'const' and 'let'. Refactor the function to use the new keywords. 
 */
var statuses = [
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}

// Refactored
const statuses = [
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}