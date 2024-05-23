import React, { useState } from "react";
import Nav from "./components/Nav";
import NoteContainer from "./components/NoteContainer";
import NoteEditor from "./components/NoteEditor";

const Content = () => {
  const [showNav, setShowNav] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  console.log("hello");
  return (
    <main>
      <Nav
        showNav={showNav}
        setShowNav={setShowNav}
        setShowEditor={setShowEditor}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
      <NoteEditor showEditor={showEditor} setShowEditor={setShowEditor} />
      <NoteContainer
        setShowNav={setShowNav}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
    </main>
  );
};

export default Content;
