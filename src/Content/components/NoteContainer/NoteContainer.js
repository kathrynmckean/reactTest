import { useState } from "react";

const NoteContainer = ({ setShowNav, selectedNote, setSelectedNote, selectedId, setSelectedId, notes, setNotes, selectNote}) => {
  



  return (
    <div id="noteContainer">
      {notes.map((note) => (
        <div
          className={note.id === selectedId ? `${note.class} selectedNote` : `${note.class} unselectedNote`}
          id={`q${note.id}`}
          key={note.id}
          onClick={() => {
            selectNote(note.id);
          }}
        >
          <div id={`title${note.id}`}>{note.title}</div>
        </div>
      ))}

    </div>
  );
};

export default NoteContainer;
