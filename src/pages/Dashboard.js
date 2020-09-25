import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { actions as notesActions } from "../store/notes";

const Background = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(notesActions.getNotes());
  }, [dispatch]);

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
          <Link to={`/note/${note.id}`}>Edit</Link>
          <span onClick={() => delNote(note.time)}>X</span>
        </div>
      ))}
      <Link to="/note/new">New Note</Link>
    </Background>
  );
};
