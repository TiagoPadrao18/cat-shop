import React, { useContext, useState } from "react";
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
import Toast from "../../components/Toast";

const CatPage = () => {
  const location = useLocation();
  const cat = location.state;
  const { addItemsToCart } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const showToastAndAddToCart = () => {
    addItemsToCart(cat);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  

  return (
    <StyledMain>
      <StyledContainer>
        <StyledTitle>{cat.name}</StyledTitle>
        <StyledImage src={cat.image} />
        <StyledButton onClick={()=>showToastAndAddToCart()}>Buy</StyledButton>
        {visible && (
          <Toast
            svg={
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
              </svg>
            }
            message="Item added to cart"
          />
        )}
      </StyledContainer>
      <StyledSubMain>
        <StyledRightContainer>
          <StyledInfo>
            Race: <StyledSpan>{cat.race}</StyledSpan>
          </StyledInfo>
          <StyledInfo>
            Age: <StyledSpan>{cat.age}</StyledSpan>
          </StyledInfo>
          <StyledInfo>
            Location: <StyledSpan>{cat.location}</StyledSpan>
          </StyledInfo>
          <StyledInfo>
            Color: <StyledSpan>{cat.color}</StyledSpan>
          </StyledInfo>
          <StyledInfo>
            Weight:<StyledSpan> {cat.weight}kg</StyledSpan>
          </StyledInfo>
          <StyledInfo>
            Price: <StyledSpan>${cat.price}</StyledSpan>
          </StyledInfo>
        </StyledRightContainer>
      </StyledSubMain>
    </StyledMain>
  );
};

export default CatPage;
