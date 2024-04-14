import {
  MainContainer,
  StyledContent,
  Title,
  StyledParagraph,
  StyledImage,
} from "./styled";
import ImageCat from "/src/assets/imageBg.jpg";

const AboutPage = () => {
  return (
    <MainContainer>
      <Title>About</Title>
      <StyledContent>
        <StyledParagraph>
          Welcome to CatArt, the ultimate destination for art and cat lovers! At
          CatArt, we celebrate the beauty and uniqueness of our feline friends
          through art. Founded by cat enthusiasts and talented artists, our
          mission is to bring joy into the homes of cat lovers all over the
          world by offering a wide selection of feline-inspired pictures and
          paintings.
        </StyledParagraph>
        <StyledImage src={ImageCat} />
      </StyledContent>
    </MainContainer>
  );
};

export default AboutPage;
