import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { asyncSong } from "../../common/asyncSongs";
import { ItemDetail } from "../../components";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../../services/firebase/";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getDoc(doc(firestore, "products", itemId)).then((response) => {
      const product = { id: response.id, ...response.data() };
      setProduct(product);
      setIsLoading(false);
    });
  }, [itemId]);

  console.log({ product });

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
