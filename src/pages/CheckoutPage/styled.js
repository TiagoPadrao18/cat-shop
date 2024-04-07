import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: #0d1f2d;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const StyledForm = styled.form`
  margin-top: 2rem;
  width: 40%;
  height: 70%;
  display: flex;
  row-gap: 1rem;
  padding: 3rem;
  flex-direction: column;
  background-color: #546a7b;
  border-radius: 2px;
  box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledInputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const PaymentMethods = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 50%;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ selected }) => (selected ? "black" : "white")};
  color: ${({ selected }) => (selected ? "#fff" : "inherit")};
  border: none;
  border-radius: 2rem;
  &:hover {
    background-color: ${({ selected }) => (selected ? "black" : "black")};
    color: ${({ selected }) => (selected ? "#fff" : "#fff")};
    transition: 0.3s ease-in;
  }
`;

export const StyledLabel = styled.label`
  color: #0d1f2d;
`;

export const CheckboxDiv = styled.div`
display: flex;

`;
export const StyledCVV = styled.div`
  display: flex;
  column-gap: 1rem;
`;


export const StyledImage = styled.img`
width: 20%;
`;

export const StyledImageContainer = styled.div`
margin-top: 10%;
display: flex;
justify-content: center;
column-gap: 2rem;
`;

export const StyledPrice = styled.p`
  color: #0d1f2d;

`;