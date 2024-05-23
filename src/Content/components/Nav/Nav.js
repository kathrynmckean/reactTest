const Nav = ({
  showNav,
  setShowNav,
  showEditor,
  setShowEditor,
  selectedId,
  setSelectedId,
  notes,
  setNotes,
  handleNewNote
}) => {


  const deleteNote = () => {
    console.log("delete note");
  };

  const editNote = () => { // show noteEditor
    setShowEditor((prevState) => !prevState);
  };

  const backToNotes = () => { // clicking the back button
    setShowNav((prevState) => !prevState); // hide the nav bar
    if (showEditor) {// if the editing screen is visible then hide it
      setShowEditor((prevState) => !prevState)
    }
    setSelectedId(null); // stop highlighting the clicked note
  };

  const handleNewButtonClick = () => {
    handleNewNote();
    if (showNav) {
      backToNotes();
    }
  }

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
      <button id="newButton" onClick={handleNewButtonClick}>
        +
      </button>
    </nav>
  );
};

export default Nav;
