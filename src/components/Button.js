import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background-color: #104e80;
  color: white;
  text-align: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:disabled {
    background: #555555;
  }
`;
