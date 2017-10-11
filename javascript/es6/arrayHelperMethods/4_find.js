'use strict';

/**
 * arrayHelperMethods
 * 
 * find
 */

/**
 * Section 1
 */
var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
];
var user;

console.log('Normal \'for\' loop => ')
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}
console.log(user);

console.log('\'find\' helper => ')
user = users.find(function (user) {
    return user.name === 'Alex';
});
console.log(user);

/**
 * Section 2
 */
function Car(model) {
    this.model = model;
}

// Example One
var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];
var specificCar;

specificCar = cars.find(function (car) {
    return car.model === 'Focus';
});
console.log(specificCar);

// Example Two
var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];
var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}
console.log(postForComment(posts, comment));

/**
 * Exercises
 */

/**
 * 1. Finding Admin Users
 * 
 * Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
 */
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];
var admin;

admin = users.find(function (user) {
    return user.admin;
});

/**
 * 2. What's Your Balance?
 * 
 * Find the account with a balance of 12 and assign it to the variable 'account'.
 */
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];
var account;

account = accounts.find(function (account) {
    return account.balance === 12;
});

/**
 * 3. Custom findWhere Helper
 * 
 * The given object should be used as the search criteria';
 * findWhere function that achieves this shorthand approach.
 */
var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

function findWhere(array, criteria) {
    return array.find(function (element) {
        var exists = true;
        for (var prop in criteria) {
            if (!element[prop] || element[prop] != criteria[prop]) {
                exist = false;
                break;
            }
        }

        return exists;
    });
}
console.log(findWhere(ladders, { height: 20 }))

