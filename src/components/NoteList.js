import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/notes";
import styled from "styled-components";

const Container = styled.div`
  margin: 5px;
  min-width: 600px;
  overflow: auto;
`;

const Row = styled.div`
  display: flex;
  min-height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: white;
  box-shadow: 2px 2px blow #efefef;
  cursor: pointer;
`;

const Text = styled.pre`
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

const Button = styled.button`
  width: 50px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  font-weight: 600;
  background-color: #dc004e;
  color: white;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #dc004e;
  cursor: pointer;
`;

export const NoteList = ({ notes }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const delNote = (e, id) => {
    e.stopPropagation();
    dispatch(actions.delNote(id));
  };

  const handleRow = (note) => {
    history.push(`/note/${note.id}`);
  };

  const viewingText = (note) => {
    const lines = note.text.split("\n");
    let text = lines[0].length > 30 ? lines[0].slice(0, 30) : lines[0];
    if (lines.length > 2 || (lines[0].length > 30 && lines.length === 1))
      text += "...";
    return text;
  };

  return (
    <Container>
      {notes.map((note, index) => (
        <Row key={index} onClick={() => handleRow(note)}>
          <Text>{viewingText(note)}</Text>
          <Controls>
            {/* <LinkButton to={`/note/${note.id}`}>Show</LinkButton> */}
            <Button onClick={(e) => delNote(e, note.id)}>Delete</Button>
          </Controls>
        </Row>
      ))}
    </Container>
  );
};
