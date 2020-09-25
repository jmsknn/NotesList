import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NoteList from "../components/NoteList";
import { actions } from "../store/notes";
import styled from "styled-components";

const Background = styled.div`
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
`;

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(actions.getNotes());
  }, [dispatch]);

  return (
    <Background>
      <NoteList notes={notes} />
      <LinkButton to="/note/new">New Note</LinkButton>
    </Background>
  );
};
