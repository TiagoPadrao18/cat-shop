import { useLocation } from "react-router-dom";
import {
  StyledContainer,
  StyledImage,
  StyledInfo,
  StyledMain,
  StyledRightContainer,
  StyledSubMain,
  StyledTitle,
} from "./styled";

const CatPage = () => {
  const location = useLocation();
  const cat = location.state;
  console.log(cat);

  return (
    <>
      <StyledMain>
        <StyledContainer>
          <StyledTitle>{cat.name}</StyledTitle>
          <StyledImage src={cat.image} />
        </StyledContainer>
        <StyledSubMain>
          <StyledRightContainer>
            <StyledInfo>Race: {cat.race}</StyledInfo>
            <StyledInfo>Age: {cat.age}</StyledInfo>
            <StyledInfo>Location: {cat.location}</StyledInfo>
            <StyledInfo>Color: {cat.color}</StyledInfo>
            <StyledInfo>Weight: {cat.weight}kg</StyledInfo>
            <StyledInfo>Price: ${cat.price}</StyledInfo>
          </StyledRightContainer>
        </StyledSubMain>
      </StyledMain>
    </>
  );
};
export default CatPage;
