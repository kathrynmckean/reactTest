const NoteContainer = ({
  setShowNav,
  selectedNote,
  setSelectedNote,
  selectedId,
  setSelectedId,
  notes,
  setNotes,
  selectNote,
}) => {
  return (
    <div id="noteContainer">
      {notes.map((note) => (
        <div
          className={
            note.id === selectedId
              ? `${note.class} selectedNote`
              : `${note.class} unselectedNote`
          }
          id={`q${note.id}`}
          key={note.id}
          onClick={() => {
            selectNote(note.id);
          }}
        >
          <div class="title" id={`title${note.id}`}>{note.title}</div>
          <div class="subtitle" id={`subtitle${note.id}`}>{note.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default NoteContainer;
