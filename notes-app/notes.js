const fs = require('fs');

var addNote = (title, body) => {
  var node = {
    title,
    body
  }

  var notes = [];

  try {
    var notesString = fs.readFileSync('notes-data.json');
    var notes = JSON.parse(notesString);
  } catch (e) {

  }

  var duplicatedNotes = notes.filter((note) => note.title === title);

  if (duplicatedNotes.length === 0) {
    notes.push(node);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
      console.log('Note saved successfully');
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  var notes = [];

  try {
    var notesString = fs.readFileSync('notes-data.json');
    var notes = JSON.parse(notesString);
  } catch (e) {

  }

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync('notes-data.json', JSON.stringify(filteredNotes));
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
