import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [productToCart, setProductToCart] = useState([]);
  const addToCart = (product) => setProductToCart((prev) => [...prev, product]);

  return (
    <CartContext.Provider value={{productToCart, addToCart}}>
        {children}
    </CartContext.Provider>
  )
};
