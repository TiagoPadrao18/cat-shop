import Button from "../../components/Button";
import Navbar from "../../components/navbar";
import { ImageCat, MainContainer, Title } from "./styled";

const Home = () => {
  return (
    <>
      <MainContainer>
        <Title>Welcome to Pet Shop</Title>
        <ImageCat src="/src/assets/cat.jpg" alt="an cat image" />
        <Button text="View More" />
      </MainContainer>
    </>
  );
};

export default Home;
