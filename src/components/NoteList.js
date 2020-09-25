import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/notes";
import styled from "styled-components";

const Container = styled.div`
  margin: 5px;
  min-width: 600px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: white;
  box-shadow: 2px 2px blow #efefef;
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

const LinkButton = styled(Link)`
  width: 50px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  font-weight: 600;
  background-color: #104e80;
  color: white;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #104e80;
  margin-right: 5px;
`;

const NoteList = ({ notes }) => {
  const dispatch = useDispatch();
  const delNote = (id) => dispatch(actions.delNote(id));

  return (
    <Container>
      {notes.map((note, index) => (
        <Row key={index}>
          <Text>{`${
            note.text.length > 30 ? note.text.slice(0, 30) + "..." : note.text
          }`}</Text>
          <Controls>
            <LinkButton to={`/note/${note.id}`}>Show</LinkButton>
            <Button onClick={() => delNote(note.id)}>Delete</Button>
          </Controls>
        </Row>
      ))}
    </Container>
  );
};

export default NoteList;
