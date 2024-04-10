import { useEffect } from "react";
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
} from "./styled";
import { useNavigate } from "react-router-dom";

const Cart = ({ opacity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const price = useSelector(getPrice);
  const cart = useSelector(getCart);
  const quantityInCart = useSelector(getQuantityInCart);

  useEffect(() => {
    if (cart.length >= 0) {
      dispatch(setQuantityItemsInCart(cart.length));
    }
  }, [cart, dispatch]);

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
        <ButtonCheckout onClick={() => navigate("/public/checkout")}>
          Checkout
        </ButtonCheckout>
        <StyledProductTotalPrice>$ {price}</StyledProductTotalPrice>
      </StyledBottomCard>
    </StyledMainCard>
  );
};
export default Cart;
