import styled from "styled-components";

export const StyledFooter = styled.footer`
width: 100%;
background-color: #0d1f2d;
display: flex;
align-items: center;
position: fixed;
bottom: 0;
justify-content: center;
column-gap: 2rem;
@media(max-width: 768px) {
    display: none;
}

`;

export const StyledTitle = styled.p`
color: white;
font-size: 1.4rem;
@media(max-width: 768px) {
    display: none;
}
`;

export const StyledSocialImg = styled.img`
width: 80%;
@media(max-width: 768px) {
    display: none;
}
`;