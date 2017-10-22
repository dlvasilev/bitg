'use strict';

/**
 * Enchanced Object Literals
 */

/**
 * Section 1
 */
const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
];

// Normal Object Literal
function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function () {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function (title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

// Enchanced Object Literal
function createBookShopTwo(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const bookShopTwo = createBookShopTwo(inventory);

console.log(bookShopTwo.inventoryValue());
console.log(bookShopTwo.priceForTitle('Harry Potter'));

/**
 * Section 2
 */
// Just for the test
const $ = {
    ajax: function (obj) {
        console.log(obj);
    }
}

function saveFile(url, data) {
    $.ajax({
        url,
        data,
        method: 'POST'
    });
}
const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);

/**
 * Exercises
 */

/**
 * 1. Multiple Properties with Enhanced Notation
 * 
 * Refactor to use enhanced literal notation
 */
const red = '#ff0000';
const blue = '#0000ff';

// const COLORS = { red: red, blue: blue };
const COLORS = { red, blue };

/**
 * 2. Condensing Code with Enhanced Literals
 * 
 * Refactor the following to use enhance object literal syntax
 */
const fields = ['firstName', 'lastName', 'phoneNumber'];

// const props = { fields: fields };
const props = { fields };

/**
 * 3. Literals in Functions
 * 
 * Refactor to use enhanced literal notation
 */
// const canvasDimensions = function(width, initialHeight) {
//     const height = initialHeight * 9 /16;
//     return { 
//         width: width, 
//         height: height 
//     };
// }

const canvasDimensions = function (width, initialHeight) {
    const height = initialHeight * 9 / 16;
    return {
        width,
        height
    };
}

/**
 * 4. Refactor to use enhanced literal notation
 * 
 * Refactor to use enhanced literal notation
 */
const color = 'red';

// const Car = {
//     color: color,
//     drive: function () {
//         return 'Vroom!';
//     },
//     getColor: function () {
//         return this.color;
//     }
// };

const Car = {
    color,
    drive() {
        return 'Vroom!';
    },
    getColor() {
        return this.color;
    }
};