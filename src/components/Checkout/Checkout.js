import { useNavigate, Link } from "react-router-dom";
import { UserForm } from "../UserForm";
import "./Chekcout.css";
      <Link to="/cart">👈    Volver al carrito    🛒</Link>
export const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="Checkout">
      <Link to="/cart">👈 Volver al carrito 🛒</Link>
      <UserForm />
    </div>
  );
};
