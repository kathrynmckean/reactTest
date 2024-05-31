import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import NoteContainer from "./components/NoteContainer";
import NoteEditor from "./components/NoteEditor";

const Content = () => {
  const [showNav, setShowNav] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [noteInputValue, setNoteInputValue] = useState(null);
  const [showSave, setShowSave] = useState(false);
  const [noteTitleValue, setNoteTitleValue] = useState(null);
  let [nextId, setNextId] = useState(null);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

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
    findNextId();
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
    const newArray = notes.filter((note) => {
      return note.id !== selectedNote.id;
    });
    const newNote = {
      id: selectedId,
      title: noteTitleValue,
      subtitle: noteInputValue,
      class: "gridSquare",
    };
    setNotes([newNote, ...newArray]);

    localStorage.setItem("noteStorage", JSON.stringify([newNote, ...newArray]));
  };

  const backToNotes = () => {
    if (unsavedChanges) {
      const confirmLeave = window.confirm(
        "You have unsaved changes. Do you want to leave without saving?",
      );
      if (!confirmLeave) {
        return;
      }
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
      // if you hit back without hitting save, catch the error and prompt to save.
    }
  };
  const findNextId = () => {
    // setNextId(1);
    notes.forEach((note) => {
      if (note.id >= nextId) {
        setNextId(note.id + 1);
      }
    });
    // return nextId;
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
        noteTitleValue={noteTitleValue}
        setNoteTitleValue={setNoteTitleValue}
        setUnsavedChanges={setUnsavedChanges}
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
