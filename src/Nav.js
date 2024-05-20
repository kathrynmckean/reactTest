const Nav = ({ logo }) => {
  const handleClick = () => {
    console.log();
  };

  const newNote = () => {
    console.log("new note");
  };

  return (
    <nav>
      <button id="backButton">back</button>
      <button id="editButton">edit</button>
      <button id="deleteButton">delete</button>
      <button id="newButton" onClick={newNote}>
        +
      </button>
    </nav>
  );
};

export default Nav;
