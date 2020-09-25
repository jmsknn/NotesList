import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as uuid from "uuid";
import styled from "styled-components";
import NoteForm from "../components/NoteForm";
import { actions } from "../store/notes";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin-top: 20px;
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
      <LinkButton to="/">Back</LinkButton>
    </Container>
  );
};
