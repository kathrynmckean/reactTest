const Nav = ({ logo }) => {
  const handleClick = () => {
    console.log();
  };

  const newNote = () => {
    console.log("new note");
  };
  const deleteNote = () => {
    console.log("delete note");
  };
  const editNote = () => {
    console.log("edit note");
  };
  const backToNotes = () => {
    console.log("back to note");
  };
  const isSelectedNote = this;
  console.log(isSelectedNote);

  return (
    <nav>
      {/* if a note is selected then show the buttons */}
      <button id="backButton" onClick={backToNotes}>
        back
      </button>
      <button id="editButton" onClick={editNote}>
        edit
      </button>
      <button id="deleteButton" onClick={deleteNote}>
        delete
      </button>
      <button id="newButton" onClick={newNote}>
        +
      </button>
    </nav>
  );
};

export default Nav;
