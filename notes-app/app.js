const notes = require('./notes.js');
const yargs = require('yargs');

args = yargs.argv;

var command = args._[0];

console.log(`Command: ${command}.`);

if (command === 'add') {
  var note = notes.addNote(args.title, args.body);

  if (note) {
    console.log('Note created successfully.');
  }
  else {
    console.log('Error on note adding.');
  }
} else if (command === 'list') {
  console.log('Listing notes.');
  notes.getAll();
} else if (command === 'read') {
  console.log('Reading note.');
  notes.getNote(args.title);
} else if (command === 'remove') {
  console.log('Removing note.');
  notes.removeNote(args.title);
} else {
  console.log('Unkwnow command.');
}
