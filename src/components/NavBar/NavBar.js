import { images } from "../../common";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="NavContainer">
      <div className="ImgContainer">
        <img className="ImgLogo" src={images.logo} alt="logo" />
      </div>
      <ul className="NavOptionsContainer">
        <li>PRODUCTS</li>
        <li>OFFERTS</li>
        <li>CONTACT</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
