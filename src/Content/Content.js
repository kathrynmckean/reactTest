import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import NoteContainer from "./components/NoteContainer";
import NoteEditor from "./components/NoteEditor";

let nextId = 3;

const Content = () => {
  const [showNav, setShowNav] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [noteInputValue, setNoteInputValue] = useState(null);
  const [showSave, setShowSave] = useState(false);

  const [notes, setNotes] = useState([
    // the array holding note information
    {
      id: 1,
      title: "title 1, first note",
      subtitle: "subtitle 1, first note",
      class: "gridSquare",
    },
    {
      id: 2,
      title: "title 2, second note",
      subtitle: "subtitle 2, second note",
      class: "gridSquare",
    },
  ]);

  const storedNotes = localStorage.getItem("noteStorage");

  useEffect(() => {
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes);
      setNotes(parsedNotes);
    }
  }, [storedNotes]);

  const handleNewNote = () => {
    console.log("new note");
    const newNote = {
      id: nextId,
      title: "brand new note",
      subtitle: "new note, edit content here",
      class: "gridSquare",
    };
    setNotes([newNote, ...notes]);
    selectNote(nextId); // highlight the new note
    setSelectedNote(newNote);
    setShowEditor(true); // show the editor
    nextId += 1;
  };

  const handleDeleteNote = () => {
    const newArray = notes.filter((note) => {
      return note.id !== selectedNote.id;
    });
    setNotes(newArray);
    backToNotes();
  };

  const selectNote = (noteId) => {
    // runs when a note is clicked
    backToNotes();
    setShowNav(true);
    setSelectedId(noteId); // highlight the note itself
    console.log("notes in selectNote", notes);
    const noteToBeSelected = notes.find((note) => note.id === noteId);
    setSelectedNote(noteToBeSelected);
  };

  const handleSaveNote = () => {
    console.log("save");
    console.log("note input value", noteInputValue);
    // selected note value = noteInputValue
    console.log(selectedNote);

    const newArray = notes.filter((note) => {
      return note.id !== selectedNote.id;
    });
    setNotes(newArray);

    // tried to replace content itself
    // const newishArray = notes.map((note) => {
    //   if (note.id === selectedId) {
    //     return (note.name = noteInputValue);
    //   } else {
    //     return note;
    //   }
    // });
    // setNotes(newishArray);

    // create a new item in the array with the selectedId

    const newNote = {
      id: selectedId,
      title: selectedNote?.title ?? "",
      subtitle: noteInputValue,
      class: "gridSquare",
    };

    setNotes([newNote, ...notes]);

    // selectNote(nextId); // highlight the new note
    // setSelectedNote(newNote);
    // setShowEditor(true); // show the editor

    localStorage.setItem("noteStorage", JSON.stringify(notes));
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

  return (
    <main>
      <Nav
        showNav={showNav}
        setShowNav={setShowNav}
        showEditor={showEditor}
        setShowEditor={setShowEditor}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        notes={notes}
        setNotes={setNotes}
        handleNewNote={handleNewNote}
        handleDeleteNote={handleDeleteNote}
        showSave={showSave}
        setShowSave={setShowSave}
        handleSaveNote={handleSaveNote}
        backToNotes={backToNotes}
      />
      <NoteEditor
        showEditor={showEditor}
        setShowEditor={setShowEditor}
        selectedNote={selectedNote}
        noteInputValue={noteInputValue}
        setNoteInputValue={setNoteInputValue}
      />
      <NoteContainer
        setShowNav={setShowNav}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        notes={notes}
        setNotes={setNotes}
        selectNote={selectNote}
      />
    </main>
  );
};

export default Content;
