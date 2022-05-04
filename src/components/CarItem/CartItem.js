import './CartItem.css'

export const CartItem = ({ product, onDeleteProduct }) => {
  return (
    <div className="CartItem">
      <div>
        <strong>Product:</strong> {product.name + " "}
        <strong>Quantity:</strong> {product.quantity + " "}
        <strong>Price:</strong> {product.price} <strong>SubTotal:</strong>{" "}
        {product.quantity * product.price}
      </div>
      <button onClick={() => onDeleteProduct(product.id)}>Remove</button>
    </div>
  );
};
