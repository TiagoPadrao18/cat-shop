import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemsToCart = (item) => {
    setCart([...cart, item]);
  };

  const [quantityInCart,setQuantityInCart] = useState(0);
  const [price,setPrice] = useState(0);

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const removeAllItems = () =>{
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart,quantityInCart,setQuantityInCart, price,setPrice, addItemsToCart, removeItemFromCart,removeAllItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
