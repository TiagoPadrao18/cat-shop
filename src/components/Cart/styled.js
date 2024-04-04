import styled from "styled-components";

export const StyledMainCard = styled.div`
  height: 100%;
  background-color: #546a7b;
  display: flex;
  opacity: ${({ opacity }) => opacity}%;
  flex-direction: column;
  width: 20%;
`;

export const StyledScaffold = styled.div`
  height: 80%;
  padding-left: 4rem;
`;
export const StyledTitle = styled.p`
  font-size: 1.3rem;
`;
export const StyledTitleContainer = styled.div`
  width: 100%;
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
`;

export const StyledRemoveButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1rem;
  &:hover {
    transition: 0.6s ease-in-out;
    color: black;
  }
`;

export const StyledProduct = styled.div`
  display: flex;
  color: #fff;
  column-gap: 1rem;
  margin-top: 1rem;
`;

export const StyledBottomCard = styled.div`
  padding-left: 4rem;
  padding-bottom: 2rem;
  display: flex;
  column-gap: 2rem;
`;

export const StyledProductImage = styled.img`
  width: 30%;
`;
export const StyledProductTitle = styled.p``;
export const StyledProductTotalPrice = styled.p`
  color: #fff;
  font-size: 1rem;
`;
