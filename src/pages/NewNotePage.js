import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as uuid from "uuid";
import { NoteForm } from "../components";
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

export const NewNotePage = () => {
  const note = { text: "" };
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSave = (note) => {
    dispatch(
      actions.addNote({
        ...note,
        id: uuid.v1(),
        createdAt: note.updatedAt,
      })
    );
    history.push("/");
  };

  return (
    <Container>
      <NoteForm note={note} onSubmit={handleSave} />
    </Container>
  );
};
