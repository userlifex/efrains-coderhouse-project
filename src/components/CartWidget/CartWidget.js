import { useContext } from "react";
import { images } from "../../common";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <div className="CartWidget">
      <div className="ImgContainer">
        <img className="ImgLogo" src={images.cartIcon} alt="" />
      </div>
      <h3 className="Text">{quantity}</h3>
    </div>
  );
};
