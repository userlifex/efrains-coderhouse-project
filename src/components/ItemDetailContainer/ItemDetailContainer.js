import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { asyncSong } from "../../common/asyncSongs";
import { ItemDetail } from "../../components";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    asyncSong(+itemId).then((res) => {
      setProduct(res);
      setIsLoading(false);
    });
  }, [itemId]);

  return !isLoading ? (
    !product ? (
      <h1>Product not found</h1>
    ) : (
      <ItemDetail product={product} />
    )
  ) : (
    <p>Loading...</p>
  );
};
