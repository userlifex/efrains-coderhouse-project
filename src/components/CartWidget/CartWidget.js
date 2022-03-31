import { images } from "../../common";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="CartWidget">
      <div className="ImgContainer">
        <img className="ImgLogo" src={images.cartIcon} alt="" />
      </div>
      <h3 className="Text">3</h3>
    </div>
  );
};
