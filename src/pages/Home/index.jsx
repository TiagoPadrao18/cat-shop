import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import { ImageCat, MainContainer, Title } from "./styled";

const Home = () => {
  return (
    <>
    <Navbar/>
      <MainContainer>
        <Title>Welcome to Pet Shop</Title>
        <ImageCat src="/src/assets/cat.jpg" alt="an cat image" />
        <Button text="View More" />
      </MainContainer>
    <Footer/>
    </>
  );
};

export default Home;
