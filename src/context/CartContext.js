import { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const getQuantity = useCallback(() => {
    let count = 0;
    cart.forEach((prod) => (count += prod.quantity));
    return count;
  }, [cart]);

  useEffect(() => {
    const q = getQuantity();
    setQuantity(q);
  }, [cart, getQuantity]);

  const addToCart = (product) => {
    const { id, name, category, quantity } = product;

    setCart([...cart, { id, category, quantity, name: name["name-USes"] }]);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const productIsInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        quantity,
        productIsInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
