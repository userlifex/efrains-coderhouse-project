import "./Item.css";
export const Item = ({ title, img, price }) => (
  <div className="Item">
    <h2>{title}</h2>
    <img height="200" width="200" src={img} alt={title} />
    <p>
      <i>Price: {price}</i>
    </p>
  </div>
);
