import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useUserContext } from "../../context/UserContext";
import { CartItem } from "../CarItem/CartItem";
import { Link } from "react-router-dom";
import { firestore } from "../../services/firebase";
import {
  collection,
  query,
  where,
  writeBatch,
  documentId,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { CartActions } from "./CartActions/CartActions";
import "./Cart.css";

export const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState();
  const [error, setError] = useState(null);
  const { cart, removeFromCart, total, clearCart } = useCart();
  const { user } = useUserContext();

  useEffect(() => {
    return () => {
      clearComponent();
    };
  }, []);

  const clearComponent = () => {
    setIsLoading(false);
    setError(null);
    setOrderId(null);
  };

  const createOrder = () => {
    setIsLoading(true);
    const objOrder = {
      items: cart,
      buyer: user,
      total: total,
      date: new Date(),
    };

    const batch = writeBatch(firestore);

    const outOfStock = [];

    const collectionRef = collection(firestore, "products");

    const ids = cart.map((item) => item.id);

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();

          const productQuantity = cart.find((prod) => {
            return prod.id === doc.id;
          })?.quantity;

          if (dataDoc.stock >= productQuantity) {
            batch.update(doc.ref, {
              stock: dataDoc.stock - productQuantity,
            });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestore, "orders");
          return addDoc(collectionRef, objOrder);
        }

        if (outOfStock.length > 0) {
          return Promise.reject(outOfStock.map((item) => item.name));
        }
      })
      .then(({ id }) => {
        batch.commit();
        console.log("Orden creada con id: ", id);
        setOrderId(id);
        clearCart();
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDeleteProduct = (id) => {
    removeFromCart(id);
  };

  const itemsList = cart.map((item) => (
    <CartItem
      key={item.id}
      onDeleteProduct={handleDeleteProduct}
      product={item}
    />
  ));

  const Message = ({ msg }) => {
    return (
      <div className="">
        <h2>{msg}</h2>
        <Link to="/">Ir a inicio</Link>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (orderId) {
    return (
      <Message msg={`✨ ${user.name}, tu orden ha sido creada con exito ✨`} />
    );
  }

  if (error) {
    return (
      <div>
        <h2>Fuera del stock</h2>
        <ul>
          {error.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <button
          onClick={() => {
            clearComponent();
            clearCart();
          }}
        >
          Limpiar carrito e intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div>
          <div>{itemsList}</div>
          <CartActions createOrder={createOrder} clearCart={clearCart} />
          <h3 className="Total">Total: {total}</h3>
        </div>
      ) : (
        <Message msg={"🚫 No hay productos en el carrito 🚫"} />
      )}
    </>
  );
};
