import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Textarea = styled.textarea`
  min-width: 250px;
  padding: 5px;
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
  margin-top: 20px;
`;

const NoteForm = ({ note, onSubmit }) => {
  const [text, setText] = useState(note.text || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...note, text, updatedAt: new Date().toString() });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" disabled={!text}>
        Save
      </Button>
    </Form>
  );
};

export default NoteForm;
