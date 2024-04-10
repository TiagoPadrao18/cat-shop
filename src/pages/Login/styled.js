import styled from "styled-components";

export const StyledMainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 3rem;
  background-color: #0d1f2d;
  border-radius: 1rem;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  width: 80%;
`;

export const StyledTitle = styled.h1`
  color: #fff;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: white;
  color: #000;

  padding: 0.4rem;
  border-radius: 0.4rem;
  &:hover {
    background-color: black;
    color: #fff;
    transition: 0.3s ease-in;
  }
`;
