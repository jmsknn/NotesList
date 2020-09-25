import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as uuid from "uuid";
import styled from "styled-components";
import NoteForm from "../components/NoteForm";
import { actions } from "../store/notes";

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
    <>
      <NoteForm note={note} onSubmit={handleSave} />
      <Link to="/">Back</Link>
    </>
  );
};
