import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import videoBg from "/src/assets/catVideo.mp4";
import {
  MainContainer,
  StyledButton,
  StyledDivBtn,
  Title,
  VideoCat,
} from "./styled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <VideoCat src={videoBg} autoPlay muted loop />
        <Title>Welcome to Cat Art Store</Title>
        <StyledDivBtn>
          <Link>
            <StyledButton onClick={navigate("/public/about")}>
              View more
            </StyledButton>
          </Link>
        </StyledDivBtn>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;
