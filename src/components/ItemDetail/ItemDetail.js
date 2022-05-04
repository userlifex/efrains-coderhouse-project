import { useState, useContext } from "react";
import { Counter } from "../";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({ product }) => {
  const { image_uri } = product;
  const { cart, addToCart, productIsInCart } = useCart();

  const handleChange = (quantityAdded) => {
    addToCart({ ...product, quantity: quantityAdded });
  };

  console.log(cart);

  return (
    <div className="ItemDetail">
      <div>
        <img height="400" width="400" src={image_uri} alt="hello" />
      </div>
      <div className="ItemText">
        <h2>
          Titulo (es): <span>{product.name["name-EUes"]}</span>
        </h2>
        <h2>
          Title (en): <span>{product.name["name-EUen"]}</span>
        </h2>
        <h2>
          Category: <span>{product.category.toUpperCase()}</span>
        </h2>
        <h2>
          Price: <span>{product["sell-price"]}</span>
        </h2>
        <h2>
          Stock: <span>{product.stock}</span>
        </h2>
        <div>
          <h2>Escuchala aqui:</h2>
          <audio controls src={product.music_uri} />
        </div>
        <div>
          {productIsInCart(product.id) ? (
            <div>
              <p>El producto ya esta agregado</p>
              <Link to="/cart">Ir al carrito...</Link>
            </div>
          ) : (
            <Counter stock={product.stock || 10} handleOnAdd={handleChange} />
          )}
        </div>
      </div>
    </div>
  );
};
