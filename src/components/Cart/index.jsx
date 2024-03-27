import { createContext, useState } from "react";
import {
  ButtonCheckout,
  StyledBottomCard,
  StyledMainCard,
  StyledProduct,
  StyledProductImage,
  StyledProductTitle,
  StyledProductTotalPrice,
  StyledScaffold,
  StyledTitle,
  StyledTitleContainer,
} from "./styled";

const Cart = ({ opacity }) => {

    

  return (
    <StyledMainCard opacity={opacity}>
      <StyledTitleContainer>
        <StyledTitle>Cart</StyledTitle>
      </StyledTitleContainer>
      <StyledScaffold>
        <StyledProduct>
          <StyledProductImage></StyledProductImage>
          <StyledProductTitle>Cat</StyledProductTitle>
          <StyledProductTotalPrice>$50</StyledProductTotalPrice>
        </StyledProduct>
        <StyledBottomCard>
          <ButtonCheckout>Checkout</ButtonCheckout>
        </StyledBottomCard>
      </StyledScaffold>
    </StyledMainCard>
  );
};
export default Cart;
