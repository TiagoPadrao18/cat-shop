import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  MainContainer,
  StyledButton,
  StyledDivBtn,
  Title,
  VideoCat,
} from "./styled";

const Home = () => {
  return (
    <>
      <MainContainer>
        <VideoCat src="/src/assets/catVideo.mp4" autoPlay muted loop />
        <Title>Welcome to Paws & Claws Corne</Title>
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
