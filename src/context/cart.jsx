import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemsToCart = (item) => {
    setCart([...cart, item]);
  };

  const [price,setPrice] = useState(0);

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, price,setPrice, addItemsToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
