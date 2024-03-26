import { Link } from "react-router-dom";
import styled from "styled-components";
import css from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #0d1f2d;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #fff;
  display: flex;
  padding: 1.5rem;
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
  column-gap: 2rem;
  padding-right: 2rem;
  align-items: center;
`;
export const StyledLeftNav = styled.div`
  display: flex;
  padding-left: 4rem;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 20%;
  padding-left: 7rem;
`;

export const StyledCartImage = styled.img`
  width: 30%;
`;
