import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteList from "../components/NoteList";
import { actions } from "../store/notes";
import { LinkButton } from "../components";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
