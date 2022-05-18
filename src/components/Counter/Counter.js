import { useState, useEffect } from "react";
import "./Counter.css";

export const Counter = ({ initial = 0, stock, handleOnAdd }) => {
  const [count, setCount] = useState(initial);

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
        <button disabled={stock === 0 || count === 0} onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button disabled={stock === 0 || count === stock} onClick={increment}>
          +
        </button>
      </div>

      <button disabled={count === 0} onClick={() => handleOnAdd(count)}>
        Add to cart
      </button>

      {stock === 0 && <p>Out of stock</p>}
    </div>
  );
};
