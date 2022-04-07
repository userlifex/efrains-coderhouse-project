import { useState, useEffect } from "react";
import { asyncSongs } from "../../common/asyncSongs";
import { Counter } from "..";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    asyncSongs().then((res) => {
      setProducts(res);
    });
  }, []);

  const handleOnAdd = (total) => {
    console.log(`Se han agregado ${total} items`);
  };
  return (
    <div>
      <h1>Albumnes dispoibles: </h1>
      <ItemList products={products} />
    </div>
  );
};
