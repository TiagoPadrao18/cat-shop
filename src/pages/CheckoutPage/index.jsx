import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import {
  CheckboxDiv,
  PaymentMethods,
  StyledButton,
  StyledCVV,
  StyledForm,
  StyledImage,
  StyledInputDiv,
  StyledLabel,
  StyledMainContainer,
  StyledTitle,
  StyledImageContainer,
  StyledPrice,
} from "./styled";
import Input from "../../components/Input";
import Button from "../../components/Button";

const CheckoutPage = () => {
  const { price } = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <StyledMainContainer>
      <StyledForm>
        <StyledTitle>Pay with</StyledTitle>
        <PaymentMethods>
          <StyledButton
            onClick={() => handlePaymentMethodClick("credit")}
            selected={selectedPaymentMethod === "credit"}
          >
            Credit
          </StyledButton>

          <StyledButton
            disabled
            onClick={() => handlePaymentMethodClick("mbway")}
            selected={selectedPaymentMethod === "mbway"}
          >
            Mbway
          </StyledButton>
        </PaymentMethods>

        <StyledInputDiv>
          <Input placeholder="Card number" maxLength="16" required />
          <Input placeholder="Card holder" required />
          <StyledCVV>
            <Input placeholder="Credit Card" type="date" required />
            <Input placeholder="CVV" maxLength="3" />
          </StyledCVV>
          <CheckboxDiv>
            <StyledLabel>
              <input type="checkbox" />
              Save my card for future transation
            </StyledLabel>
          </CheckboxDiv>
          <Button text="Checkout" />
          <StyledPrice>Total price: {price}</StyledPrice>
          <StyledImageContainer>
            <StyledImage src="/src/assets/masterCard.png" />
            <StyledImage src="/src/assets/mbway.png" />
          </StyledImageContainer>
        </StyledInputDiv>
      </StyledForm>
    </StyledMainContainer>
  );
};

export default CheckoutPage;
