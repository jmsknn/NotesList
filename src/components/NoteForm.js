import React, { useState } from "react";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  min-width: 500px;
  min-height: 200px;
  padding: 20px;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  padding-top: 10px;
  background-color: #e3e3e3;
`;

export const NoteForm = ({ note, onSubmit }) => {
  const [text, setText] = useState(note.text || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...note, text, updatedAt: new Date().toString() });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Please input the note..."}
      />
      <ButtonContainer>
        <Button type="submit" disabled={!text}>
          Save
        </Button>
        <LinkButton to="/">Back</LinkButton>
      </ButtonContainer>
    </Form>
  );
};
