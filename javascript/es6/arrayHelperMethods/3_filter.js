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

console.log('\'filter\' loop => ')
filteredProducts = products.filter(function (product) {
    return product.type === 'vegetable';
});
console.log(filteredProducts);

/**
 * Section 2
 */
console.log('\'filter\' loop => More then one condition ')
var filteredProductsTwo = products.filter(function (product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});
console.log(filteredProductsTwo);


/**
 * Section 3
 */
console.log('\'filter\' loop => More complex situation, using inside a function')
var post = {id: 4, title: 'New Post'};
var comments = [
    { postId: 4, content: 'awesome post'},
    { postId: 3, content: 'its was ok'},
    { postId: 4, content: 'neat'},
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    })
}

console.log(commentsForPost(post, comments));