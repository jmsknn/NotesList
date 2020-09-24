import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #104e80;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 26px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      Notes
    </StyledHeader>
  );
}
