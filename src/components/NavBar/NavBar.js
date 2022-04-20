import { images } from "../../common";
import { CartWidget } from "../CartWidget/CartWidget";
import { asyncCategories } from "../../common/asyncSongs";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    asyncCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <nav className="NavContainer">
      <Link to="/" className="ImgContainer">
        <div className="ImgContainer">
          <img className="ImgLogo" src={images.logo} alt="logo" />
        </div>
      </Link>
      <ul className="NavOptionsContainer">
        {categories.map((category) => (
          <li key={category.id} className="NavOptions">
            <NavLink
              to={`/category/${category.id}`}
              className={({ isActive }) => (isActive ? "Active" : "Inactive")}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};
