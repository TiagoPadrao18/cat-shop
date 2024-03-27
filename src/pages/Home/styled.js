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
  color: #0d1f2d;
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem;

  border-radius: 1rem;
`;

export const VideoCat = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: fill;
  min-width: 100%;
  min-height: 100vh;
  z-index: -1;
`;

export const StyledButton = styled.button`
  padding: 1rem;
  color: #0d1f2d;
  border: 2px solid #0d1f2d;
  border-radius: 1rem;
  width: 20em;
  background-color: transparent;
  &:hover {
    transition: 0.3s ease-in;
    background-color: #0d1f2d;
    border: none;
    color: #fff;
  }
`;

export const StyledDivBtn = styled.div`
  min-height: 100vh;
 min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
