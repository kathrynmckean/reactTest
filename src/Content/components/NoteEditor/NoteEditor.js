const NoteEditor = ({ showEditor, setShowEditor }) => {
  return (
    <div id="noteEditorContainer">
      {showEditor && (
        <>
          <div id="noteEditor">
            <div id="noteEditorHeader">Sample</div>
            <textarea name="noteEditorText" id="noteEditorText"></textarea>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteEditor;
