import { useContext } from "react";
import { images } from "../../common";
import "./CartWidget.css";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const CartWidget = () => {
  const { quantity } = useCart();
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div
      onClick={goToCart}
      className="CartWidget"
      style={{ opacity: quantity === 0 ? 0 : 1 }}
    >
      <div className="ImgContainer">
        <img className="ImgLogo" src={images.cartIcon} alt="" />
      </div>
      <h3 className="Text">{quantity}</h3>
    </div>
  );
};
