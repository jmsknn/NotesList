import React, { useState } from "react";

const NoteForm = ({ note, onSubmit }) => {
  const [text, setText] = useState(note.text || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...note, text, updatedAt: new Date().toString() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit" disabled={!text}>
        Save
      </button>
    </form>
  );
};

export default NoteForm;
