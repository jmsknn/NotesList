import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { actions as notesActions } from '../store/notes';

const Background = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Dashboard = () => {
  const [newNote, setNewNote] = useState('');
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(notesActions.getNotes());
  }, [dispatch]);

  const handleInput = (e) => {
    setNewNote(e.target.value);
  }

  const addNewNote = () => {
    if(newNote) {
      const note = {
        text: newNote,
        time: new Date(),
      }
      console.log("----------", note);
      dispatch(notesActions.addNote(note));
    } 
  }
  return (
    <Background>
      {
        notes.map((note, index) =>
          <span key={index}>
            {note.text}
          </span>)
      }
      <div>
        <input onChange={handleInput} /><button onClick={addNewNote}>Add Note</button>
      </div>
    </Background>
  );
};
