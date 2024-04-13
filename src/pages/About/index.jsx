import { MainContainer, StyledContent, Title, StyledParagraph,StyledImage } from "./styled";
import ImageCat from "/src/assets/imageBg.jpg";

const AboutPage = () => {
  return (
    <MainContainer>
      <Title>About</Title>
      <StyledContent>
        <StyledParagraph>
          Welcome to our feline wonderland! We celebrate
          the majestic beauty and playful charm of cats through stunning
          artistry. Our collection features an array of captivating paintings,
          prints, and canvases, each meticulously crafted to capture the essence
          of our beloved feline friends. Immerse yourself in a world where
          whiskers whisk tales, and every meow tells a story. Whether you're a
          dedicated cat aficionado or simply admire the grace and mystery of
          these enchanting creatures, our gallery has something to delight every
          cat lover. From whimsical kittens exploring their surroundings to
          regal portraits of noble cats, our artwork transforms any space into a
          sanctuary of purr-sonal expression. Adorn your walls with the timeless
          elegance of our cat-inspired masterpieces and let your love for these
          graceful companions shine. Browse our curated collection and discover
          the purr-fect piece to complement your home or office decor. Whether
          you seek a bold statement piece or a subtle accent, our diverse
          selection ensures there's a cat-themed masterpiece to suit your taste.
          Each artwork is printed with the highest quality materials, ensuring
          vibrant colors and crisp details that truly bring our feline subjects
          to life. With easy online ordering and worldwide shipping, adding a
          touch of cat magic to your surroundings has never been easier. Join
          our community of cat enthusiasts and unleash your inner feline
          aficionado . Let our art awaken your senses and
          ignite your imagination as you embark on a journey through the
          enchanting world of cats. After all, who can resist the irresistible
          charm of a cat's gaze?
        </StyledParagraph>
        <StyledImage src={ImageCat} />
      </StyledContent>
    </MainContainer>
  );
};

export default AboutPage;
