import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  flex-direction: column;
  background-color: #9ea3b0;
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
  color: #fff;
  font-size: 4rem;
`;

export const ImageCat = styled.img`
  width: 50%;
  border-radius: 1rem;
`;

export const CatCard = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #546a7b;
  width: 28%;
  padding: 2rem;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 2rem;
  max-width: 400px;
  align-self: stretch;
  &:hover {
    box-shadow: 0 0 11px rgba(0, 0, 0);
  }
`;

export const CatTitle = styled.h2`
  font-size: 1rem;
  color: white;
`;

export const CatDetail = styled.p`
  color: white;
`;

export const LinkButton = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 1rem;
  background-color: white;
  border-radius: 10rem;

`;



export const ImageContainer = styled.div`
max-width: 100%;
`;