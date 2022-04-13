import { useState, useEffect } from "react";
import { asyncSong } from "../../common/asyncSongs";
import { ItemDetail } from "../../components";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    asyncSong(10).then((res) => {
      setProduct(res);
      setIsLoading(false);
    });
  }, []);

  return !isLoading ? <ItemDetail product={product} /> : <p>Loading...</p>;
};
