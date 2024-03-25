import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  flex-direction: column;
`;

export const CatsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: black;
`;

export const ImageCat = styled.img`
  width: 50%;
  border-radius: 1rem;
`;

export const CatCard = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: black;
  width: 20%;
  padding: 2rem;
  align-items: center;
  column-gap: 2rem;
  min-width: 200px;
  align-self: stretch;
`;

export const CatTitle = styled.h2`
  font-size: 1rem;
  color: white;
`;

export const CatDetail = styled.p`
  color: white;
`;
