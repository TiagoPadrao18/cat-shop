import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #fff;
  display: flex;
  &:hover{
    color: white;
  }
  padding: 1.5rem;
`;

export const StyledRightNav = styled.div`
  display: flex;
  column-gap: 2rem;
`;
