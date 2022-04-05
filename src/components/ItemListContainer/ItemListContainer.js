import { Counter } from "..";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greting }) => {
  const handleOnAdd = (total) => {
    console.log(`Se han agregado ${total} items`);
  };
  return (
    <div>
      <h1 className="Greeting">{greting}</h1>
      <Counter initial={1} stock={12} handleOnAdd={handleOnAdd} />
    </div>
  );
};
