import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartActions.css";
import { useUserContext } from "../../../context/UserContext";

export const CartActions = ({ clearCart, createOrder }) => {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);
  const { isUserValid } = useUserContext();

  useEffect(() => {
    return () => {
      setIsPressed(false);
    };
  }, []);

  const handleCreateOrder = () => {
    setIsPressed(true);
    if (isUserValid) {
      createOrder();
    }
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="CartActions">
        <button onClick={() => clearCart()}>Limpiar carrito</button>
        <button onClick={handleCreateOrder}>Generar order</button>
        <button onClick={goToCheckout}>Checkout</button>
      </div>
      {isPressed && !isUserValid && (
        <div className="NotUser">
          <i>
            🚨🚨🚨Registrar correctamente su usuario para poder generar una
            orden
            <b>(Checkout)</b>🚨🚨🚨
          </i>
        </div>
      )}
    </>
  );
};
