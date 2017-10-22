'use strict';

/**
 * Default Function Arguments
 */

/**
 * Section 1
 */
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }

    return method;
    // logic to make the request
}
console.log("makeAjaxRequest('google.com')");
console.log(makeAjaxRequest('google.com'));
console.log("makeAjaxRequest('google.com', 'GET')");
console.log(makeAjaxRequest('google.com', 'GET'));

function makeAjaxRequestWithDefault(url, method = 'GET') {
    return method;
    // logic to make the request
}
console.log("makeAjaxRequestWithDefault('google.com')");
console.log(makeAjaxRequestWithDefault('google.com'));
console.log("makeAjaxRequestWithDefault('google.com', null)");
console.log(makeAjaxRequestWithDefault('google.com', null));
console.log("makeAjaxRequestWithDefault('google.com', undefined)");
console.log(makeAjaxRequestWithDefault('google.com', undefined));
console.log("makeAjaxRequestWithDefault('google.com', 'POST')");
console.log(makeAjaxRequestWithDefault('google.com', 'POST'));

/**
 * Section 2
 */
function User(id) {
    this.id = id;
}

const user = new User(1);
console.log(user);

function generateId() {
    return Math.random() * 9999999;
}

function createAdminUser(user) {
    user.admin = true;
    return user;
}

const adminUser = createAdminUser(new User(generateId()));
console.log(adminUser);

function createAdminUserWithDefault(user = new User(generateId())) {
    user.admin = true;
    return user;
}
console.log(createAdminUserWithDefault());
const userTwo = new User(generateId());
console.log(userTwo);
console.log(createAdminUserWithDefault(userTwo));

/**
 * Exercises
 */

/**
 * 1. Using Default Arguments
 * 
 * Refactor the following code to use default function arguments.
 */
// function sum(a, b) {
//     if (a === undefined) {
//         a = 0;
//     }

//     if (b === undefined) {
//         b = 0;
//     }

//     return a + b;
// }

function sum(a = 0, b = 0) {
    return a + b;
}

/**
 * 2. Dumping Unused Code
 * 
 * Refactor the following code to use default function arguments.
 */
// function addOffset(style) {
//     if (!style) {
//         style = {};
//     }

//     style.offset = '10px';

//     return style;
// }

function addOffset(style = {}) {
    style.offset = '10px';
    return style;
}