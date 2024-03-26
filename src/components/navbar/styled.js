import { Link } from "react-router-dom";
import styled from "styled-components";
import css from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  background-color: #0D1F2D;
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
`;
