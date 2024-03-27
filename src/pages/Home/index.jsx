import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  Div,
  MainContainer,
  StyledButton,
  StyledDivBtn,
  Title,
  VideoCat,
} from "./styled";
import Cart from "../../components/Cart";
import { useState } from "react";

const Home = () => {
  const [cartOpacity, setCartOpacity] = useState(0);

  return (
    <>
      <Navbar setCartOpacity={setCartOpacity}/>
      <Div>
        <Cart opacity={cartOpacity}/>
      </Div>
      <MainContainer>
        <VideoCat src="/src/assets/catVideo.mp4" autoPlay muted loop/>
        <Title>Welcome to Cat-Shop</Title>
        <StyledDivBtn>
          <Link>
            <StyledButton>View more</StyledButton>
          </Link>
        </StyledDivBtn>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;
