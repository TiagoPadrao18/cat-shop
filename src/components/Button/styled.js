import styled from "styled-components";

export const StyledButton = styled.button`
width: 100%;
  padding: 1rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  &:hover {
    color: white;
    background-color: black;
    transition: ease-in-out 0.3s;
  }
`;
