'use strict';

/**
 * Promises and Fetch
 */

/**
 * Section 1
 */
const promise = new Promise((resolve, reject) => {
    const wantToResolve = true;
    if (wantToResolve) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('I was also ran!'))
    .catch(() => console.log('Something went wrong!'));

/**
 * Section 2 
 */
const slowPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        // reject();
    }, 3000);
});

slowPromise
    .then(() => console.log('I finally arrived!'))
    .catch(() => console.log('I lost myself!'));

/**
 * Section 3
 */
const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

const url404 = "https://jsonplaceholder.typicode.com/posts12312312/";
const urlNotFound = "https://jsonplaceholder.typicode123.com/posts/";

fetch(url)
    .then(response => console.log(response)) // url && url404
    .catch(error => console.log('BAD', error)); // urlNotFound  net::ERR_NAME_NOT_RESOLVED