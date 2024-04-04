import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { StyledMainContainer } from "./styled";

const CheckoutPage = () =>{
    const {cart} = useContext(CartContext);

    console.log(cart)

    return (
        <StyledMainContainer>
            <p>ola</p>
        </StyledMainContainer>
    )

}

export default CheckoutPage;