// This example cover an alternative strategy to save data using JSON, in order to avoid the use of database for a while.

const fs = require('fs');

var originalData = {
  title: 'title',
  body: 'body'
}

var originalDataSerialized = JSON.stringify(originalData);

// Saving data
fs.writeFileSync('notes.json', originalDataSerialized);

// Reading data
var readData = fs.readFileSync('notes.json');
var data = JSON.parse(readData);

console.log(data);
