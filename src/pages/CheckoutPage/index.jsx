import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import {
  CheckboxDiv,
  PaymentMethods,
  StyledButton,
  StyledCVV,
  StyledForm,
  StyledInputDiv,
  StyledMainContainer,
  StyledTitle,
} from "./styled";
import Input from "../../components/Input";
import Button from "../../components/Button";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
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
            onClick={() => handlePaymentMethodClick("paypal")}
            selected={selectedPaymentMethod === "paypal"}
          >
            Paypal
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
          <Input placeholder="Card number" required />
          <Input placeholder="Card holder" required />
          <StyledCVV>
            <Input placeholder="Credit Card" type="date" required />
            <Input placeholder="CVV" maxLength="3" />
          </StyledCVV>
          <CheckboxDiv>
            <input type="checkbox" /> <span>Save my card for future transation</span>
          </CheckboxDiv>
          <Button text="Checkout" />
        </StyledInputDiv>
      </StyledForm>
    </StyledMainContainer>
  );
};

export default CheckoutPage;
