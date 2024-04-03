import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/cart";
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

const CatPage = () => {
  const location = useLocation();
  const cat = location.state;
  const { addItemsToCart} = useContext(CartContext);

  return (
    <StyledMain>
      <StyledContainer>
        <StyledTitle>{cat.name}</StyledTitle>
        <StyledImage src={cat.image} />
        <StyledButton onClick={() => addItemsToCart(cat)}>Buy</StyledButton>
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
  );
};

export default CatPage;
