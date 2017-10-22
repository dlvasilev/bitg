'use strict';

/**
 * Destructuring
 */

/**
 * Section 1
 */
var expense = {
    type: 'Business',
    amount: '$45 USD'
};

// ES5
var typeES5 = expense.type;
var amountES5 = expense.amount;

console.log('typeES5: ');
console.log(typeES5);
console.log('amountES5: ');
console.log(amountES5);

// ES6
// const { type } = expense;
// const { amount } = expense;
const { type, amount } = expense;

console.log('type: ');
console.log(type);
console.log('amount: ');
console.log(amount);

/**
 * Section 2
 */
// ES5
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

console.log('fileSummary(savedFile)');
console.log(fileSummary(savedFile));

// ES6
function fileSummaryTwo({ name, extension, size }) {
    return `The file ${name}.${extension} is of size ${size}`;
}
console.log('fileSummaryTwo(savedFile)');
console.log(fileSummaryTwo(savedFile));

function fileSummaryThree({ name, extension, size }, { color }) {
    return `The ${color} file ${name}.${extension} is of size ${size}`;
}
console.log('fileSummaryThree(savedFile, { color: \'red\' })');
console.log(fileSummaryThree(savedFile, { color: 'red' }));

/**
 * Section 3
 */
const companies = [
    'Google',
    'Facebook',
    'Uber'
];

// const [ name ] = companies; === var name = companies[0]
const [name, nameTwo, nameThree] = companies;
console.log(name);
console.log(nameTwo);
console.log(nameThree);

const { length } = companies;
console.log(length);

const [firstCompany, ...rest] = companies;
console.log(rest);

/**
 * Section 4
 */
const newCompanies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
];

// const [location] = newCompanies;
// console.log(location); // { name: 'Google', location: 'Mountain View' },
// const [{ location }] = newCompanies;
// console.log(location); // 'Mountain View'

const Google = {
    locations: ['Mountain View', 'New York', 'London', 'Sofia']
};

const { locations } = Google;
console.log(locations); // ['Mountain View', 'New York', 'London', 'Sofia']

const { locations: [location] } = Google;
console.log(location); // 'Mountain View'

/**
 * Section 5
 */
function signup(username, password) {
    // create new user
}
signup('myname', 'mypassword');

function signupTwo(username, password, email, dateOfBirth, city) {
    // create new user
}
signupTwo('myname', 'mypassword', 'email@email.com', '01/01/1970', 'New York');

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'email@email.com',
    dateOfBirth: '01/01/1970',
    city: 'New York'
}
function signupThree({ username, password, dateOfBirth, city, email }) {
    // create new user
}
signupThree(user);

/**
 * Section 6
 */
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

// const chartPoints = points.map(pair => {
//     const x = pair[0];
//     const y = pair[1];
// });

// const chartPoints = points.map(([x, y]) => {
//     return { x: x, y: y }
// });

const chartPoints = points.map(([x, y]) => {
    return { x, y }
});
console.log(chartPoints);

/**
 * Exercises
 */

/**
 * 1. Destructuring in Practice
 * 
 * The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function. 
 * Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  
 * Refactor this code to use destructuring.  
 */
const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

// function isEngineer(profile) {
//     var title = profile.title;
//     var department = profile.department;
//     return title === 'Engineer' && department === 'Engineering';
// }

function isEngineer({ title, department }) {
    return title === 'Engineer' && department === 'Engineering';
}

/**
 * 2. Array Destructuring in Practice
 * 
 * The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in. 
 * Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  
 * Use array destructuring and the map helper.
 */
const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(([ subject, time, teacher ]) => {
    return { subject, time, teacher };
});

/**
 * 3. Recursion with Destructuring
 * 
 * Use array destructuring, recursion, and the rest/spread operators to create a function 'double'
 * that will return a new array with all values inside of it multiplied by two. 
 * Do not use any array helpers!
 * 
 * Input: double([1,2,3])
 * Output: [2,4,6]
 */
const numbers = [1, 2, 3];

function double(numbers) {
    const [number, ...rest] = numbers;
    return (number) ? [number * 2, ...double(rest)] : numbers;
}
console.log(double(numbers));