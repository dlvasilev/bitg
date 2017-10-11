'use strict';

/**
 * arrayHelperMethods
 * 
 * filter
 */

/**
 * Section 1
 */
var products = [
    { name: 'cucumber', 'type': 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', 'type': 'fruit', quantity: 10, price: 15 },
    { name: 'celery', 'type': 'vegetable', quantity: 30, price: 9 },
    { name: 'orange', 'type': 'fruit', quantity: 3, price: 5 }
];
var filteredProducts = [];

console.log('Normal \'for\' loop => ');
for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);

console.log('\'filter\' helper => ')
filteredProducts = products.filter(function (product) {
    return product.type === 'vegetable';
});
console.log(filteredProducts);

/**
 * Section 2
 */
console.log('\'filter\' helper => More then one condition ')
var filteredProductsTwo = products.filter(function (product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});
console.log(filteredProductsTwo);


/**
 * Section 3
 */
console.log('\'filter\' helper => More complex situation, using inside a function')
var post = { id: 4, title: 'New Post' };
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'its was ok' },
    { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    })
}

console.log(commentsForPost(post, comments));

/**
 * Exercises
 */

/**
 * 1. Filtering Values
  *
 * Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.
 */
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers;

filteredNumbers = numbers.filter(function (num) {
    return num > 50;
});

/**
 * 2. Handling Permissions with Filter
 * 
 * Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'.
 */
var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];
var filteredUsers;

filteredUsers = users.filter(function (user) {
    return user.admin;
});

/**
 * 3. Implementing 'reject'.
 * 
 *  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.
 */
var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
    return array.filter(function (number) {
        return !iteratorFunction(number);
    });
}

var lessThanFifteen = reject(numbers, function (number) {
    return number > 15;
});
console.log(lessThanFifteen);

