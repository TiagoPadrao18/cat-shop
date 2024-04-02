import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();

  const addItemsToCart = ({ item }) => {
    return setCart(item);
  };

  return (
    <>
      <CartContext.Provider value={(cart, addItemsToCart)}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
