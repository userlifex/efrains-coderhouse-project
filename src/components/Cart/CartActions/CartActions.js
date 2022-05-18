import './CartActions.css'
export const CartActions = ({ clearCart, createOrder }) => (
  <div className="CartActions">
    <button onClick={() => clearCart()}>Limpiar carrito</button>
    <button onClick={() => createOrder()}>Generar order</button>
    <button onClick={() => createOrder()}>Checkout</button>
  </div>
);
