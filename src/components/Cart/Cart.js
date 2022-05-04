import { useCart } from "../../context/CartContext";
import { CartItem } from "../CarItem/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  const handleDeleteProduct = (id) => {
    removeFromCart(id);
  };

  const itemsList = cart.map((item) => (
    <CartItem
      key={item.id}
      onDeleteProduct={handleDeleteProduct}
      product={item}
    />
  ));

  const NoProducts = () => {
    return (
      <div className="cart-empty">
        <h2>No products in cart</h2>
        <Link to="/">Go to home</Link>
      </div>
    );
  };
  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div>
          {itemsList} <h3>Total: {total}</h3>
        </div>
      ) : (
        <NoProducts />
      )}
    </>
  );
};
