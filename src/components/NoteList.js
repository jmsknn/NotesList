import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/notes";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

const Text = styled.div`
  max-width: 300px;
  min-width: 200px;
  color: #666666;
  margin: 5px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4px;
`;

const NoteList = ({ notes }) => {
  const dispatch = useDispatch();
  const delNote = (id) => dispatch(actions.delNote(id));

  return (
    <div>
      {notes.map((note, index) => (
        <Row key={index}>
          <Text>{note.text}</Text>
          <Controls>
            <Link to={`/note/${note.id}`}>Edit</Link>
            <div onClick={() => delNote(note.id)}>Delete</div>
          </Controls>
        </Row>
      ))}
    </div>
  );
};

export default NoteList;
