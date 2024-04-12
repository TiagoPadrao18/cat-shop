import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const MainSubContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  row-gap: 1.5rem;
  flex-direction: column;
  width: 70%;
`;

export const LeftFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 80%;
  background-color: #0d1f2d;
  border-radius: 1rem;
  padding-left: 2rem;
  margin: 2rem 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FilterTitle = styled.p`
  color: #fff;
  font-size: 2rem;
`;

export const FilterSubtitle = styled.p`
  color: #fff;
  font-size: 1.6rem;
  
`;

export const StyledLabel = styled.label`
  color: #fff;
`;

export const FilterList = styled.li`
  display: flex;
  row-gap: 0.5rem;
  flex-direction: column;
 
`;

export const InputCheckbox = styled.input`
accent-color: #0d1f2d;
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
  @media (max-width: 768px) {
   font-size: 2rem;
  }
`;

export const ImageCat = styled.img`
  max-width: 100%;
  border-radius: 1rem;
`;

export const CatCard = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #0d1f2d;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
  column-gap: 2rem;
  max-width: 200px;
  height: 400px;
  align-self: stretch;
  &:hover {
    box-shadow: 0 0 11px rgba(0, 0, 0);
  }
`;

export const CatTitle = styled.p`
  color: white;
  font-size: 1.4rem;
`;

export const CatDetail = styled.p`
  color: white;
  font-size: 1rem;
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
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
`;

export const StyledButtonPag = styled.button`
  background-color: #0d1f2d;
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
