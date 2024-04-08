import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 1.5rem;
  flex-direction: column;
`;

export const CatsContainer = styled.div`
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
  max-width: 100%;

  border-radius: 1rem;
`;

export const CatCard = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #546a7b;
  align-items: center;
  justify-content: center;
  width: 28%;
  padding: 2rem;
  flex-wrap: wrap;
  column-gap: 2rem;
  max-width: 200px;
  align-self: stretch;
  &:hover {
    box-shadow: 0 0 11px rgba(0, 0, 0);
  }
`;

export const CatTitle = styled.h2`
  color: white;
`;

export const CatDetail = styled.p`
  color: white;
  font-size: 1.2rem;
`;

export const LinkButton = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1.2rem;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: black;
    color: white;
  }
`;

export const ImageContainer = styled.div`
  max-width: 100%;
`;

export const StyledPagination = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
`;

export const StyledButtonPag = styled.button`
  background-color: #546a7b;
  border: none;
  color: #fff;
  width: 12rem;
  padding: 1rem;
  &:hover {
    transition: 0.3s ease-in;
    background-color: #fff;
    color: black;
  }
`;

export const StyledCatInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
`;
