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

