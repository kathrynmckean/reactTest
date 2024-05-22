import React, { useState } from "react";
import Nav from "./Nav.js";
import NoteContainer from "./NoteContainer.js";
import NoteEditor from "./NoteEditor.js";

const Content = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = (e) => {
    console.log(e);
  };
  // const handleClick2 = (name) => {
  //   console.log(`${name} you clicked it`);
  // };
  // const handleClick3 = (e) => {
  //   console.log(e.target);
  // };

  return (
    <main>
      {/* <p onDoubleClick={handleClick}>Hello!</p> */}
      {/* <button onClick={handleClick}>Click here</button> */}
      {/* <button onClick={() => handleClick2("katie")}>Click here</button>
      <button onClick={(e) => handleClick3(e)}>Click here</button> */}
      {/* <button onClick={(e) => handleClick(e)}>back</button> */}
      <Nav showNav={showNav} />
      <NoteContainer setShowNav={setShowNav} />
    </main>
  );
};

export default Content;
