const NoteEditor = ({
  showEditor,
  setShowEditor,
  selectedNote,
  setNoteInputValue,
  noteInputValue,
}) => {
  console.log("selected note in editor", selectedNote);
  const handleOnChange = (e) => {
    setNoteInputValue(e.target.value);
    console.log("note input value", noteInputValue);
  };
  return (
    <div id="noteEditorContainer">
      {showEditor && (
        <>
          <div id="noteEditor">
            <div id="noteEditorHeader">{selectedNote?.title ?? ""}</div>
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
