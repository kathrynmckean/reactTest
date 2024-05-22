import Nav from "./Nav.js";

const NoteContainer = () => {
  const expandNote = (num) => {
    console.log(num);
    console.log(Nav);
  };
  return (
    <div id="noteContainer">
      <div className="gridSquare" onClick={() => expandNote(1)} id="q1">
        <div class="noteTitles" id="title1">
          Create your first note using the + button!
        </div>
        <div id="text1">Click here to edit or delete your notes!</div>
      </div>
    </div>
  );
};

export default NoteContainer;
