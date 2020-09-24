import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { actions as notesActions } from "../store/notes";

const Background = styled.div`
  width: 100%;
  hei ght: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Dashboard = () => {
  const [newNote, setNewNote] = useState("");
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(notesActions.getNotes());
  }, [dispatch]);

  const handleInput = (e) => {
    setNewNote(e.target.value);
  };

  const addNewNote = () => {
    if (newNote) {
      const note = {
        text: newNote,
        time: new Date(),
      };
      dispatch(notesActions.addNote(note));
    }
  };

  const delNote = (time) => {
    const note = {
      time,
    };
    dispatch(notesActions.delNote(note));
  };

  return (
    <Background>
      {notes.map((note, index) => (
        <div key={index}>
          <span>{note.text}</span>
          <span onClick={() => delNote(note.time)}>X</span>
        </div>
      ))}
      <div>
        <input onChange={handleInput} />
        <button onClick={addNewNote}>Add Note</button>
      </div>
    </Background>
  );
};
