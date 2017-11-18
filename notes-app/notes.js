var addNode = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting node', title);
};

var removeNote = (title) => {
  console.log('Removing node', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
