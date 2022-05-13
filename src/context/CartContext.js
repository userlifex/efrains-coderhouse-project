import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const getQuantity = useCallback(() => {
    let count = 0;
    cart.forEach((prod) => (count += prod.quantity));
    return count;
  }, [cart]);

  useEffect(() => {
    const q = getQuantity();
    setQuantity(q);
    const totalSellCart = cart.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );
    setTotal(totalSellCart);
  }, [cart, getQuantity]);

  const addToCart = (product) => {
    const { id, name, category, quantity } = product;
    console.log(product["sell-price"]);

    setCart([
      ...cart,
      {
        id,
        category,
        quantity,
        price: product["sell-price"],
        name: name,
      },
    ]);
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
        productIsInCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
