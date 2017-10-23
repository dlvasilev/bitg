'use strict';

/**
 * Generators
 */

/**
 * Section 1
 */
function* numbers() {
    yield;
}

const gen = numbers();
console.log('*numbers');
console.log(gen.next());
console.log(gen.next());

/**
 * Section 2
 */
function* shopping() {
    console.log('2. Stuff on the sidewalk');
    console.log('3. Walikng down the sidewalk');
    console.log('4. Go into the store with cash');
    const stuffFromStore = yield 'cash';
    console.log('8. Getting out of the store');
    const cleanClothes = yield 'laundry';
    console.log('10. Walking back home');
    return [stuffFromStore, cleanClothes]
}

const goingOut = shopping();
console.log('*shopping');
console.log('1. Leaving our home');
console.log(goingOut.next());
console.log('5. Walked into the store');
console.log('6. Walking up and down the aisles..');
console.log('7. Purchuse our stuff');
console.log(goingOut.next('groceries'));
console.log('9. Walking to laundry place');
console.log(goingOut.next('clean clothes'));
console.log('11. We are home with the groceries and the cleaned clothes');

/**
 * Section 3
 */
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const colorsGen = colors();
console.log('*colors');
console.log(colorsGen.next());
console.log(colorsGen.next());
console.log(colorsGen.next());
console.log(colorsGen.next());

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors);

/**
 * Section 4
 */
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

function* FullTeamIterator(team) {
    const teamGenerator = TeamIterator(team);
    yield* teamGenerator;
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

const teamNames = [];
console.log('*TeamIterator');
for (let name of TeamIterator(engineeringTeam)) {
    teamNames.push(name);
}
console.log(teamNames);

const testingTeamNames = [];
console.log('*TestingTeamIterator');
for (let name of TestingTeamIterator(testingTeam)) {
    testingTeamNames.push(name);
}
console.log(testingTeamNames);

const allNames = [];
console.log('*FullTeamIterator');
for (let name of FullTeamIterator(engineeringTeam)) {
    allNames.push(name);
}
console.log(allNames);

/**
 * Section 5
 */
// Symbol.iterator = SI
const testingTeamSI = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeamSI = {
    testingTeamSI,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeamSI;
    }
};

const teamNamesSI = [];
console.log('Symbol.iterator');
for (let name of engineeringTeamSI) {
    teamNamesSI.push(name);
}
console.log(teamNamesSI);

/**
 * Section 6
 */
class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];
const tree = new Comment('Great post!', children);

const comments = [];
console.log('*CommentsTree');
for (let comment of tree) {
    comments.push(comment);
}
console.log(comments);