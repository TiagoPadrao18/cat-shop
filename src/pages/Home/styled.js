import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const Div = styled.div`
  width: 100%;
  height: 66%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  z-index: 1;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 300;
  background-color: #0d1f2d;
  padding: 1rem;
  border-radius: 1rem;
  @media(max-width: 768px) {
    font-size: 2rem;
    background-color: transparent;
    color:#0d1f2d;
  }
`;

export const VideoCat = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: fill;
  min-width: 100%;
  height: 100vh;
  z-index: -1;
  @media(max-width: 768px) {
    display: none;
  }
`;

export const StyledButton = styled.button`
  padding: 1rem;
  color: #fff;
  border: 2px solid #0d1f2d;
  border-radius: 1rem;
  border: none;
  width: 20em;
  background-color: #0d1f2d;
  &:hover {
    transition: 0.3s ease-in;
    background-color: #fff;
    color: #000;
  }
`;

export const StyledDivBtn = styled.div`
  min-height: 100vh;
 min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 4rem;
  background-color: #0d1f2d;
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
 
`;

export const StyledTitle = styled.p`
  color: white;
  font-size: 1.4rem;
`;

export const StyledSocialImg = styled.img`
  width: 80%;
`;
