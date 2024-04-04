import { useContext } from "react";
import { CartContext } from "../../context/cart";
import {
  ButtonCheckout,
  StyledBottomCard,
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
  const navigate = useNavigate();
  const { cart, removeItemFromCart } = useContext(CartContext);

  const cartList = [...cart];
  console.log(cartList);

  const renderedProducts = cartList.map((product) => (
    <StyledProduct key={product.id}>
      <StyledProductImage src={product.image} />
      <StyledProductTitle>{product.name}</StyledProductTitle>
      <StyledRemoveButton onClick={() => removeItemFromCart(product.id)}>remove</StyledRemoveButton>
    </StyledProduct>
  ));

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
  return (
    <StyledMainCard opacity={opacity}>
      <StyledTitleContainer>
        <StyledTitle>Cart</StyledTitle>
      </StyledTitleContainer>
      <StyledScaffold>{renderedProducts}</StyledScaffold>
      <StyledBottomCard>
        <ButtonCheckout onClick={()=>navigate("/public/checkout")}>Checkout</ButtonCheckout>
        <StyledProductTotalPrice>$ {totalPrice}</StyledProductTotalPrice>
      </StyledBottomCard>
    </StyledMainCard>
  );
};
export default Cart;
