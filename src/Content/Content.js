import React, { useState } from "react";
import Nav from "./components/Nav";
import NoteContainer from "./components/NoteContainer";
import NoteEditor from "./components/NoteEditor";
let nextId = 3;
const Content = () => {
  
  const [showNav, setShowNav] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // const [selectedNote, setSelectedNote] = useState(null);
  const handleNewNote = () => {
    console.log('new note')
    selectNote(nextId); // highlight the new note
    setShowEditor(true) // show the editor

    setNotes(
      [
        {id: nextId, title: "", subtitle: "blank", class: 'gridSquare'},
        ...notes
      ])
    nextId+=1;
  }

  const selectNote = (noteId) => { // runs when a note is clicked
      setShowNav(true)
    setSelectedId(noteId); // highlight the note itself
  };

  const [notes, setNotes] = useState([ // the array holding note information
  {
    id: 1,
    title: "sample",
    subtitle: "sample also",
    class: "gridSquare",
  },
  {
    id: 2,
    title: "sample2",
    subtitle: "sample2 also",
    class: "gridSquare",
  },
]);

  return (
    <main>
      <Nav
        showNav={showNav}
        setShowNav={setShowNav}
        showEditor = {showEditor}
        setShowEditor={setShowEditor}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        notes = {notes}
        setNotes = {setNotes}
        handleNewNote = {handleNewNote}
        // selectedNote={selectedNote}
        // setSelectedNote={setSelectedNote}
      />
      <NoteEditor showEditor={showEditor} setShowEditor={setShowEditor} />
      <NoteContainer
        setShowNav={setShowNav}
        selectedId={selectedId}
        setSelectedId= {setSelectedId}
        notes = {notes}
        setNotes = {setNotes}
        selectNote = {selectNote}
        // selectedNote={selectedNote}
        // setSelectedNote={setSelectedNote}
      />
    </main>
  );
};

export default Content;
