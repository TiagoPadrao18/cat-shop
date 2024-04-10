import { Link } from "react-router-dom";
import styled from "styled-components";
import css from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #0d1f2d;
  justify-content: space-between;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #fff;
  display: flex;
  &:hover {
    color: gray;
    transition: ease-in-out 0.5s;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      border-bottom: 0.5rem solid white;
    `}
`;

export const StyledRightNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 4rem;
column-gap: 2rem;
  align-items: center;
`;
export const StyledLeftNav = styled.div`
  display: flex;
  padding-left: 2rem;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 20%;

`;

export const StyledCartImage = styled.img`
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledName = styled.p`
  font-size: 1.4rem;
  color: #fff;
`;

export const TestDiv = styled.div`
  position: relative;
`;

export const StyledCartCount = styled.span`
  color: #fff;
  font-size: 0.8rem;
  padding: 3px;
  position: absolute;
  top: -5px;
  right: -5px; 
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ opacity }) => opacity}%;

`;


export const StyledCartDiv = styled.div`
display: flex;
width: 10%;

`;