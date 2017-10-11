'use strict';

/**
 * arrayHelperMethods
 * 
 * forEach
 */

/**
 * Section 1
 */
var colors = ['red', 'blue', 'green'];

console.log('Normal \'for\' loop => ')
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('\'forEach\' loop => ')
colors.forEach(function (color) {
    console.log(color);
});

console.log('\'forEach\' with \'arrow\' function => ')
colors.forEach((color) => {
    console.log(color)
});

/**
 * Section 2
 */
// Create and array of number
var numbers = [1, 2, 3, 4, 5];

// First Road

// Create a variable to hold the sum
var sumOne = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function (number) {
    sumOne += number;
});
// Print the sum variable
console.log(sumOne);

// Second Road

// Create a variable to hold the sum
var sumTwo = 0;

function adder(number) {
    sumTwo += number;
}
// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// Print the sum variable
console.log(sumTwo);


/**
 * Exercises
 */

/**
 * 1. Moving Away from For Loops
 */
function savePost(post) {
    console.log('Post ' + post.id + 'Saved!');
}

function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function (post) {
        savePost(post);
    });
}

/**
 * 2. Processing Values
 * 
 * Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.
 */
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach(function (image) {
    areas.push(image.height * image.width);
});