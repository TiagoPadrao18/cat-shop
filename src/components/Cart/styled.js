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
  padding-left: 6rem;
`;
export const StyledTitle = styled.p`
  margin-left: 6rem;
  font-size: 2rem;
`;
export const StyledTitleContainer = styled.div`
  width: 100%;
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

export const StyledProduct = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const StyledBottomCard = styled.div`
  display: flex;
`;

export const StyledProductImage = styled.img``;
export const StyledProductTitle = styled.p``;
export const StyledProductTotalPrice = styled.p``;
