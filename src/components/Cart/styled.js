import styled, { keyframes, css } from "styled-components";

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const MainContainer = styled.div`
`;

export const StyledMainCard = styled.div`
  height: 60%;
  background-color: #0d1f2d;
  position: fixed;
  flex-direction: column;
  width: 20%;
  right: 0;
  z-index: 1;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  ${({ opacity }) =>
    opacity === 100 &&
    css`
      animation-name: ${slideDownAnimation};
    `}
  ${({ opacity }) => opacity === 0 && "display: none;"}
  @media(max-width: 768px) {
    left: 0;
    width: 100%;
    height: 90vh;
  }
`;

export const StyledScaffold = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-left: 4rem;
  margin-bottom: 1rem;
`;
export const StyledTitle = styled.p`
  font-size: 1.3rem;
`;
export const StyledTitleContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  justify-content: center;
  display: flex;
  background-color: #fff;
`;

export const ButtonCheckout = styled.button`
  width: 10rem;
  padding: 1rem;
  background-color: white;
  border: none;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: #0d1f2d;
    color: #fff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledRemoveButton = styled.p`
  background-color: transparent;
  color: white;
  border: none;

  font-size: 1rem;
  &:hover {
    transition: 0.6s ease-in-out;
    color: black;
    cursor: pointer;
  }
`;

export const StyledProduct = styled.div`
  display: flex;
  color: #fff;
  column-gap: 1rem;
  align-items: center;
`;

export const StyledEmpty = styled.p`
  color: #fff;
  font-size: 1rem;
`;

export const StyledBottomCard = styled.div`
  padding-left: 4rem;
  padding-bottom: 2rem;
  display: flex;
  column-gap: 2rem;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    padding:0;
  }
 
`;

export const StyledProductImage = styled.img`
  width: 30%;
`;
export const StyledProductTitle = styled.p``;
export const StyledProductTotalPrice = styled.p`
  color: #fff;
  font-size: 1rem;
`;
