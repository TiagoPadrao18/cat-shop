import { Link } from "react-router-dom";
import styled,{keyframes} from "styled-components";
import css from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #0d1f2d;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-end;
  }
`;

export const ResponsiveBurger = styled.div`
  display: none;
  flex-direction: column;
  row-gap: 0.4rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const MenuMobile = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  object-fit: fill;
  min-width: 100%;
  min-height: 100vh;
  z-index: 1;
  background-color: #0d1f2d;
  display: ${({ display }) => display};
  animation: ${({ display }) => display === "block" && slideDownAnimation} 0.3s ease-in-out;
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const ContentMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;
`;

export const StyledLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  transition: all 0.5s ease;
  &:hover{
    transition: ease-in-out 0.5s;
    text-decoration: underline;
  }
`;

export const CloseMobile = styled.p`
  padding: 1rem;
  font-size: 1.5rem;
  color: #fff;
  &:hover {
    cursor: pointer;
    transition: 0.3s ease-in;
    color: #fff;
  }
`;

export const Trace = styled.div`
  height: 1px;
  width: 2rem;
  background-color: #fff;
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
  @media(max-width: 768px) {
    display: none;
  }
`;

export const StyledRightNav = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    padding-right: 0;
    justify-content: flex-end;
  }
`;
export const StyledLeftNav = styled.div`
  display: flex;
  padding-left: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledImage = styled.img`
  width: 20%;
`;

export const StyledCartImage = styled.img`
  width: 6%;
  &:hover {
    cursor: pointer;
  }
  
`;

export const StyledCartImagee = styled.img`
  width: 6%;
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 768px){
    display: none;
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
  top: -20px;
  right: 120px;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ opacity }) => opacity}%;
  @media(max-width: 768px){
    top: -14px;
    right: 90px;
    width: 10px;
    height: 10px;
  }
  
`;

export const StyledCartDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 2rem;
`;
