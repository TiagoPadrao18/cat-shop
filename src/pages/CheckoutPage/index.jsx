import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
import Toast from "../../components/Toast";
import Input from "../../components/Input";
import Button from "../../components/Button";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { price, removeAllItems} = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [visible, setVisible] = useState(false);

const showToastAndChangePage = () => {
    setVisible(true);
    removeAllItems()
    setTimeout(() => {
      setVisible(false);
      navigate("/public/home");
    }, 5000);
  };

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method);
  };

  const submitForm = (event) => {
    event.preventDefault();
    showToastAndChangePage();
  };

  return (
    <StyledMainContainer>
      <StyledForm onSubmit={submitForm}>
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
          <Button text="Checkout" type="submit" />
          <StyledPrice>Total price: {price}$</StyledPrice>
          <StyledImageContainer>
            <StyledImage src="/src/assets/masterCard.png" />
            <StyledImage src="/src/assets/mbway.png" />
          </StyledImageContainer>
          {visible && (
            <Toast
              scheme="success"
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
              message="Payment made successfully"
            />
          )}
        </StyledInputDiv>
      </StyledForm>
    </StyledMainContainer>
  );
};

export default CheckoutPage;
