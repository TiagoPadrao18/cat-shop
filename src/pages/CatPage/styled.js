import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  column-gap: 3rem;
  justify-content: center;
  @media (max-width: 768px) {
    row-gap: 4rem;
  }
`;

export const StyledTitle = styled.h1`
  color: #0d1f2d;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Optionals = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;
export const OptionalImageCat = styled.img`
  width: 20%;
  opacity: 40%;
  border-radius: 1rem;
  transition: transform .3s;
  &:hover{
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
    opacity: 100%;

  }
  @media (max-width: 768px) {
    width: 60%;
  }

`;

export const StyledContainer = styled.div`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  width: 50%;
`;

export const StyledImage = styled.img`
  max-width: 50%;
max-height: 24%;
  border-radius: 2rem;
  @media(max-width: 768px){
    max-width: 100%;
    max-height: 100%;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  background-color: #0d1f2d;
`;

export const StyledSubMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyledInfo = styled.p`
  color: #fff;
  display: flex;
  column-gap: 1rem;
  font-size: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;
export const StyledSpan = styled.p`
  color: #fff;
  font-size: 2rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;

export const StyledButton = styled.button`
  background-color: #0d1f2d;
  border: none;
  color: white;
  width: 12rem;
  padding: 1rem;
  border-radius: 4px;
  &:hover {
    background-color: white;
    transition: 0.3s ease-in;
    color: #0d1f2d;
    box-shadow: 0 0 11px rgba(0, 0, 0);
    cursor: pointer;
  }
`;
