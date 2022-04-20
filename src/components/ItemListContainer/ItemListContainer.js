import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { asyncSongs, asyncSongsByCategory } from "../../common/asyncSongs";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    asyncSongsByCategory(categoryId).then((res) => {
      setProducts(res);
      console.log(res);
      setIsLoading(false);
    });
  }, [categoryId]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : products.length > 0 ? (
        <div>
          <h1>Albumnes dispoibles: </h1>
          <ItemList products={products} />
        </div>
      ) : (
        <h1>No hay albumnes disponibles</h1>
      )}
    </div>
  );
};
