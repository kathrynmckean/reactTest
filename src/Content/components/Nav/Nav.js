const Nav = ({
  showNav,
  setShowNav,
  showEditor,
  setShowEditor,
  selectedId,
  setSelectedId,
  notes,
  setNotes,
  handleNewNote,
  handleDeleteNote,
  handleSaveNote,
  showSave,
  setShowSave,
}) => {
  const editNote = () => {
    // show noteEditor
    setShowEditor((prevState) => !prevState);
    setShowSave(true);
  };

  const backToNotes = () => {
    // clicking the back button
    setShowNav((prevState) => !prevState); // hide the nav bar
    if (showEditor) {
      // if the editing screen is visible then hide it
      setShowEditor((prevState) => !prevState);
    }
    if (showSave) {
      setShowSave(false);
    }
    setSelectedId(null); // stop highlighting the clicked note
  };

  const handleNewButtonClick = () => {
    backToNotes();
    setShowSave(true);
    handleNewNote();
    if (!showNav) {
      setShowNav(true);
    }
  };

  return (
    <nav>
      {showNav && (
        <>
          {" "}
          {/* if a note is selected then show the buttons */}
          <button id="backButton" onClick={backToNotes}>
            back
          </button>
          <button id="editButton" onClick={editNote}>
            edit
          </button>
          <button id="deleteButton" onClick={handleDeleteNote}>
            delete
          </button>
          {showSave && (
            <button id="saveButton" onClick={handleSaveNote}>
              save
            </button>
          )}
        </>
      )}
      <button id="newButton" onClick={handleNewButtonClick}>
        +
      </button>
    </nav>
  );
};

export default Nav;
