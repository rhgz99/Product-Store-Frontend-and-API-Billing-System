import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [productToCart, setProductToCart] = useState([]);
  const addToCart = (product) => {
    setProductToCart((prev) => {
      return prev.find((item) => item.id === product.id)
        ? prev.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item,
          )
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (product) => {
    setProductToCart((prev) => prev.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item))
  }

  const decreaseQty = (product) => {
    setProductToCart((prev) =>
      prev.map((item) =>
        item.id === product.id && item.qty > 1
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item,
      ),
    );
  };
  return (
    <CartContext.Provider value={{ productToCart, addToCart, decreaseQty, increaseQty }}>
      {children}
    </CartContext.Provider>
  );
};
