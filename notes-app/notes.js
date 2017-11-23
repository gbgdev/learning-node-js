const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

var logNote = (note) => {
  return `Title: '${note.title}' | Body: '${note.body}'`;
};

var addNote = (title, body) => {
  var note = {
    title,
    body
  }

  notes = fetchNotes();

  var duplicatedNotes = notes.filter((note) => note.title === title);

  if (duplicatedNotes.length === 0) {
    notes.push(note);
    saveNotes(notes)

    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
