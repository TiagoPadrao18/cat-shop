import { useLocation } from "react-router-dom";
import { useContext } from "react";
import {
  StyledButton,
  StyledContainer,
  StyledImage,
  StyledInfo,
  StyledMain,
  StyledRightContainer,
  StyledSubMain,
  StyledTitle,
} from "./styled";
import Button from "../../components/Button";
import { CartContext } from "../../context/cart";

const CatPage = () => {
  const location = useLocation();
  const cat = location.state;
  const {cart,addItemsToCart} = useContext(CartContext)

  console.log(cart);


  return (
    <>
      <StyledMain>
        <StyledContainer>
          <StyledTitle>{cat.name}</StyledTitle>
          <StyledImage src={cat.image} />
          <StyledButton onClick={()=>addItemsToCart("gato aqui")}>Buy</StyledButton>
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
