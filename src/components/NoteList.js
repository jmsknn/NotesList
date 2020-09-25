import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/notes";

const NoteList = ({ notes }) => {
  const dispatch = useDispatch();
  const delNote = (id) => dispatch(actions.delNote(id));

  return (
    <div>
      {notes.map((note, index) => (
        <div key={index}>
          <span>{note.text}</span>
          <Link to={`/note/${note.id}`}>Edit</Link>
          <span onClick={() => delNote(note.id)}>Delete</span>
        </div>
      ))}
      <Link to="/note/new">New Note</Link>
    </div>
  );
};

export default NoteList;
