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
  StyledSpan,
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
          <StyledInfo>Race: <StyledSpan>{cat.race}</StyledSpan></StyledInfo>
          <StyledInfo>Age: <StyledSpan>{cat.age}</StyledSpan></StyledInfo>
          <StyledInfo>Location: <StyledSpan>{cat.location}</StyledSpan></StyledInfo>
          <StyledInfo>Color: <StyledSpan>{cat.color}</StyledSpan></StyledInfo>
          <StyledInfo>Weight:<StyledSpan> {cat.weight}kg</StyledSpan></StyledInfo>
          <StyledInfo>Price: <StyledSpan>${cat.price}</StyledSpan></StyledInfo>
        </StyledRightContainer>
      </StyledSubMain>
    </StyledMain>
  );
};

export default CatPage;
