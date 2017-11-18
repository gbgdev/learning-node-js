console.log('Starting app');

const notes = require('./notes.js');

console.log(`You are ${notes.age} years old.`);
console.log(`Result of notes.addNote() is '${notes.addNote()}'.`);
console.log(`Result of sum 1 + 2 is ${notes.sum(1, 2)}.`);
