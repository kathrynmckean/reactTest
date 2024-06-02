const NoteEditor = ({
  showEditor,
  setShowEditor,
  selectedNote,
  setNoteInputValue,
  noteInputValue,
  noteTitleValue,
  setNoteTitleValue,
  setUnsavedChanges,
}) => {
  const handleOnChange = (e) => {
    setNoteInputValue(e.target.value);
    setUnsavedChanges(true);
  };
  const handleOnChangeTitle = (e) => {
    setNoteTitleValue(e.target.value);
    setUnsavedChanges(true);
  };

  return (
    <div id="noteEditorContainer">
      {showEditor && (
        <>
          <div id="noteEditor">
            <textarea
              id="noteEditorHeader"
              name="noteEditorHeader"
              defaultValue={selectedNote?.title ?? ""}
              onChange={handleOnChangeTitle}
            ></textarea>
            <textarea
              name="noteEditorText"
              id="noteEditorText"
              defaultValue={selectedNote?.subtitle ?? ""}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteEditor;
