var command = process.argv[2];

console.log(`Command: ${command}.`);

if (command === 'add') {
  console.log('Adding new note.');
} else if (command === 'list') {
  console.log('Listing notes.');
} else if (command === 'read') {
  console.log('Reading note.');
} else if (command === 'remove') {
  console.log('Removing note.');
} else {
  console.log('Unkwnow command.');
}
