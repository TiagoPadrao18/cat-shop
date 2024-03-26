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
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;
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


export const StyledPagination = styled.div`
display: flex;
column-gap: 1rem;
`;

export const StyledButtonPag = styled.button`
background-color: #546a7b;
border: none;
color: #fff;
width: 12rem;
padding: 1rem;
&:hover{
  transition: 0.3s ease-in;
  background-color:#fff;
  color:black;
}
`