import { useState } from "react";

const NoteContainer = ({ setShowNav, selectedNote, setSelectedNote }) => {
  const expandNote = (noteId) => {
    console.log(noteId);
    setShowNav((prevState) => !prevState);
    setSelectedNote(notes[noteId]);
  };

  console.log("selected note", selectedNote);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "sample",
      subtitle: "sample also",
      class: "gridSquare unselectedNote",
    },
    {
      id: 2,
      title: "sample2",
      subtitle: "sample2 also",
      class: "gridSquare unselectedNote",
    },
  ]);
  return (
    <div id="noteContainer">
      {notes.map((note) => (
        <div
          className={note.class}
          id={`q${note.id}`}
          key={note.id}
          onClick={() => {
            expandNote(note.id);
          }}
        >
          <div id={`title${note.id}`}>{note.title}</div>
        </div>
      ))}
      {selectedNote && (
        // now selectednote should render, create an element with its details
        <div>note here</div>
      )}
    </div>
  );
};

export default NoteContainer;
