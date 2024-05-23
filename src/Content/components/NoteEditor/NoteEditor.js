const NoteEditor = ({ showEditor, setShowEditor }) => {
  return (
    <div id="noteEditorContainer">
      {showEditor && (
        <>
          <div id="noteEditor"></div>
        </>
      )}
    </div>
  );
};

export default NoteEditor;
