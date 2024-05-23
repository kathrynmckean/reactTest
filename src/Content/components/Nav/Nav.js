const Nav = ({
  showNav,
  setShowNav,
  setShowEditor,
  selectedNote,
  setSelectedNote,
}) => {
  const deleteNote = () => {
    console.log("delete note");
  };
  const editNote = () => {
    setShowEditor((prevState) => !prevState);
  };
  const backToNotes = () => {
    console.log("back to note");
    // stop highlighting the clicked note
    setShowNav((prevState) => !prevState);
    // hide the editing screen
    setShowEditor((prevState) => !prevState);
    // const selectedId = document.querySelector("nav").className;
    // const findSelectedNote = document.getElementById(selectedId);
    // findSelectedNote.classList.replace("selectedNote", "unselectedNote");
    setSelectedNote(null);
  };

  return (
    <nav>
      {/* if a note is selected then show the buttons */}

      {showNav && (
        <>
          <button id="backButton" onClick={backToNotes}>
            back
          </button>
          <button id="editButton" onClick={editNote}>
            edit
          </button>
          <button id="deleteButton" onClick={deleteNote}>
            delete
          </button>
        </>
      )}
      {/* TODO: add something for the onclick here */}
      <button id="newButton" onClick={() => {}}>
        +
      </button>
    </nav>
  );
};

export default Nav;
