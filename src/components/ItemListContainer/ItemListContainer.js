import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestore } from "../../services/firebase";

import { asyncSongs, asyncSongsByCategory } from "../../common/asyncSongs";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    let collectionRef = collection(firestore, "products");

    if (categoryId) {
      collectionRef = query(collectionRef, where("category", "==", categoryId));
    }

    setIsLoading(true);
    getDocs(collectionRef).then((response) => {
      console.log(response);
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setIsLoading(false);

      setProducts(products);
    });
  }, [categoryId]);

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
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
