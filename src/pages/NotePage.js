import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, LinkButton, NoteForm } from "../components";
import { actions } from "../store/notes";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NoteContainer = styled.div`
  min-width: 400px;
  background-color: white;
`;

const Text = styled.div`
  font-size: 12px;
  text-align: center;
  margin: 16px;
`;

const NoteDescription = styled.pre`
  max-width: 500px;
  color: #666666;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
  background-color: #e3e3e3;
`;

export const NotePage = () => {
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
    <Container>
      {note && (
        <NoteContainer>
          <Text>Created at {new Date(note.createdAt).toLocaleString()}</Text>
          <Text>Updated at {new Date(note.updatedAt).toLocaleString()}</Text>
          {edit ? (
            <NoteForm note={note} onSubmit={handleSave} />
          ) : (
            <div>
              <NoteDescription>{note.text}</NoteDescription>
              <ButtonContainer>
                <Button onClick={() => setEdit(true)}>Edit</Button>
                <LinkButton to="/">Back</LinkButton>
              </ButtonContainer>
            </div>
          )}
        </NoteContainer>
      )}
    </Container>
  );
};
