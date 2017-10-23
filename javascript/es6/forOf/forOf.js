'use strict';

/**
 * For ... of
 */

/**
 * Section 1
 */
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

/**
 * Section 2
 */
const nums = [1, 2, 3, 4];

let total = 0;
for (let num of nums) {
    total += num;
}
console.log(total);