'use strict';

/**
 * arrayHelperMethods
 * 
 * every and some
 */

/**
 * Section 1
 */
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

console.log('Normal \'for\' loop => ');
for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}
console.log('allComputersCanRunProgram: (for) ' + allComputersCanRunProgram);
console.log('onlySomeComputersCanRunProgram: (for) ' + onlySomeComputersCanRunProgram);


console.log('\'every\' helper => ');
allComputersCanRunProgram = computers.every(function (computer) {
    return computer.ram > 16;
});
console.log('allComputersCanRunProgram: (every) ' + allComputersCanRunProgram);

console.log('\'some\' helper => ');
onlySomeComputersCanRunProgram = computers.some(function (computer) {
    return computer.ram > 16;
});
console.log('onlySomeComputersCanRunProgram: (some) ' + onlySomeComputersCanRunProgram);

/**
 * Section 2
 */
var names = [
    'Alexandria',
    'Matthew',
    'Joe'
];
var allNamesAreLongerThenFour;
var someNamesAreLongerThenFour;

allNamesAreLongerThenFour = names.every(function (name) {
    return name.length > 4;
})
console.log('allNamesAreLongerThenFour: ' + allNamesAreLongerThenFour);

someNamesAreLongerThenFour = names.some(function (name) {
    return name.length > 4;
});
console.log('someNamesAreLongerThenFour: ' + someNamesAreLongerThenFour);

/**
 * Section 3
 */
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('PassIt');
var birthDate = new Field('11/10/2017');

var fields = [username, password, birthDate];

var userIsValid = fields.every(function (field) {
    return field.validate();
})
console.log('userIsValid: ' + userIsValid);

/**
 * Exercises
 */

/**
 * 1. Finding Submitted Users
 * 
 * Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
 */
var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function (user) {
    return user.hasSubmitted;
});
console.log('EveryUserHasSubmitted: ' + hasSubmitted);

/**
 * 2. In Progress Network Requests
 * 
 * Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
 */
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function (req) {
    return req.status === 'pending';
});
console.log('RequestInProcess: ' + inProgress);