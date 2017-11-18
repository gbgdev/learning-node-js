const yargs = require('yargs');

const argv = yargs.argv;

console.log('Yargs', argv);

// Printing raw arguments that were parsed by Yargs
console.log(argv._);

// Using Yargs to parse parameters:
// --title=Title --body=Body
console.log(`Title: ${argv.title}, Body: ${argv.body}.`);
