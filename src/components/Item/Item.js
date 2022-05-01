import { useContext } from "react";
import { Link } from "react-router-dom";
//import { Context } from "../../App";

import "./Item.css";
export const Item = ({ id, title, img, price }) => {
  //const { cart, setCart } = useContext(Context);


  return (
    <div className="Item">
      <h2>{title}</h2>
      <img height="200" width="200" src={img} alt={title} />
      <p>
        <i>Price: {price}</i>
      </p>

      <Link to={`/item/${id}`}>Ver mas...</Link>
    </div>
  );
};
