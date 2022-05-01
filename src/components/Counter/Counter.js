import { useState, useEffect } from "react";
import "./Counter.css";

export const Counter = ({ initial = 0, stock, handleOnAdd }) => {
  const [count, setCount] = useState(initial);

  //useEffect(() => {
  //handleOnAdd(count);
  //}, [count, handleOnAdd]);

  const increment = () => {
    if (count < stock) {
      setCount((current) => current + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((current) => current - 1);
    }
  };

  return (
    <div className="CounterContainer">
      <div className="Counter">
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      </div>

      <button onClick={() => handleOnAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
