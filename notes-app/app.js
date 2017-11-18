const notes = require('./notes.js');
const yargs = require('yargs');

args = yargs.argv;

var command = args._[0];

console.log(`Command: ${command}.`);

if (command === 'add') {
  var note = notes.addNote(args.title, args.body);
  var message = note ? 'Note created successfully.' : 'Error on note adding.';
  console.log(message);

} else if (command === 'list') {
  console.log('Listing notes.');
  notes.getAll();

} else if (command === 'read') {
  var note = notes.getNote(args.title);
  var message = note ? `Note found. ${notes.logNote(note)}.` : 'Note not found.';
  console.log(message);

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(args.title);
  var message = noteRemoved ? 'Note removed successfuly.' : 'Error on note removing.';
  console.log(message);

} else {
  console.log('Unkwnow command.');
}
