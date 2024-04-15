import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuantityItemsInCart,
  removeItemsFromCart,
  setPrice,
} from "../../store/cart/actions";
import {
  getCart,
  getPrice,
  getQuantityInCart,
} from "../../store/cart/selectors";
import ToastError from "../ToastError";
import {
  ButtonCheckout,
  StyledBottomCard,
  StyledEmpty,
  StyledMainCard,
  StyledProduct,
  StyledProductImage,
  StyledProductTitle,
  StyledProductTotalPrice,
  StyledRemoveButton,
  StyledScaffold,
  StyledTitle,
  StyledTitleContainer,
  MainContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";

const Cart = ({ opacity }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const price = useSelector(getPrice);
  const cart = useSelector(getCart);
  const quantityInCart = useSelector(getQuantityInCart);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (cart.length >= 0) {
      dispatch(setQuantityItemsInCart(cart.length));
    }
  }, [cart, dispatch]);

  const showToastError = (message) => {
    setMessage(message);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  const renderedProducts = cart.map((product) => (
    <StyledProduct key={product.id}>
      <StyledProductImage src={product.image} />
      <StyledProductTitle>{product.name}</StyledProductTitle>
      <StyledRemoveButton
        onClick={() => dispatch(removeItemsFromCart(product.id))}
      >
        remove
      </StyledRemoveButton>
    </StyledProduct>
  ));

  const verifyIfIsValidToCheckout = () => {
    if (localStorage.getItem("userName") === null) {
      showToastError("Please login first");
      return;
    }
    if (quantityInCart === 0) {
      showToastError("No products in the cart");
      return;
    }
    navigate("/public/checkout");
  };

  dispatch(setPrice(cart.reduce((acc, product) => acc + product.price, 0)));
  return (
    <StyledMainCard opacity={opacity}>
      <StyledTitleContainer>
        <StyledTitle>Cart</StyledTitle>
      </StyledTitleContainer>
      <StyledScaffold>
        {quantityInCart > 0 ? (
          renderedProducts
        ) : (
          <StyledEmpty>Cart is empty</StyledEmpty>
        )}
      </StyledScaffold>
      <StyledBottomCard>
        <ButtonCheckout onClick={() => verifyIfIsValidToCheckout()}>
          Checkout
        </ButtonCheckout>
        <StyledProductTotalPrice>$ {price}</StyledProductTotalPrice>
      </StyledBottomCard>
      {visible && (
        <ToastError
          message={message}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
            </svg>
          }
        />
      )}
      ;
    </StyledMainCard>
  );
};
export default Cart;
