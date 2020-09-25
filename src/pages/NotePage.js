import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { actions } from "../store/notes";
import styled from "styled-components";

export const NotePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { notes } = useSelector((state) => state.notes || []);
  const note = notes.find((note) => note.id === id);
  const [edit, setEdit] = useState(false);

  const Container = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const Text = styled.div`
    text-align: center;
    margin: 10px;
  `;

  const NoteDescription = styled.div`
    padding: 20px;
    color: #666666;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `;

  const Button = styled.button`
    width: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    background-color: #104e80;
    color: white;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #104e80;
  `;

  const LinkButton = styled(Link)`
    width: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    background-color: #104e80;
    color: white;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #104e80;
  `;

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
        <div>
          <Text>Created at {new Date(note.createdAt).toLocaleString()}</Text>
          <Text>Updated at {new Date(note.updatedAt).toLocaleString()}</Text>
          {edit ? (
            <NoteForm note={note} onSubmit={handleSave} />
          ) : (
            <>
              <NoteDescription>{note.text}</NoteDescription>
              <ButtonContainer>
                <Button onClick={() => setEdit(true)}>Edit</Button>
                <LinkButton to="/">Back</LinkButton>
              </ButtonContainer>
            </>
          )}
        </div>
      )}
    </Container>
  );
};
