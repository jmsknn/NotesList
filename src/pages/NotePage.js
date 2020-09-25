import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { actions } from "../store/notes";
import styled from "styled-components";

export const NotePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { notes } = useSelector((state) => state.notes || []);
  const note = notes.find((note) => note.id === id);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(actions.getNotes());
  }, [dispatch]);

  const handleSave = (note) => {
    dispatch(actions.editNote(note));
    setEdit(false);
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <div>{id}</div>
      {note && (
        <div>
          <div>{note.createdAt}</div>
          <div>{note.updatedAt}</div>
          {edit ? (
            <NoteForm note={note} onSubmit={handleSave} />
          ) : (
            <>
              <div>{note.text}</div>
              <button onClick={() => setEdit(true)}>Edit</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
