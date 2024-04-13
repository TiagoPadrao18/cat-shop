import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
flex-direction: column;

height: 100vh;
width: 100%;
padding: 2rem;
@media(max-width: 768px){
    padding: 0;
    flex-direction: column;

}

`;

export const StyledContent = styled.div`
display: flex;

font-size: 1.5rem;
column-gap:10rem ;
width:100%;
@media(max-width: 768px){
    flex-direction: column;
}

`;

export const StyledImage = styled.img`
width: 30%;
height: 60%;
padding: 4rem;
@media(max-width: 768px){
    width: 100%;
    padding: 0;
}
`;

export const StyledParagraph = styled.p`
color: #fff;
`;


export const Title = styled.h1`
color: #fff;
font-size: 4rem;
`;