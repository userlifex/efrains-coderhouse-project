import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="ItemList">
      {products.map((product) => {
        const { id, name, image_uri } = product;
        const price = product["sell-price"];

        return (
          <Item
            key={id}
            id={id}
            title={name["name-USes"]}
            price={price}
            img={image_uri}
          />
        );
      })}
    </div>
  );
};
