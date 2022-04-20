import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
  const { image_uri } = product;
  return (
    <div className="ItemDetail">
      <div>
        <img height="400" width="400" src={image_uri} alt="hello" />
      </div>
      <div className="ItemText">
        <h2>
          Titulo (es): <span>{product.name["name-EUes"]}</span>
        </h2>
        <h2>
          Title (en): <span>{product.name["name-EUen"]}</span>
        </h2>
        <h2>
          Category: <span>{product.category.toUpperCase()}</span>
        </h2>
        <h2>
          Price: <span>{product["sell-price"]}</span>
        </h2>
        <div>
          <h2>Escuchala aqui:</h2>
          <audio controls src={product.music_uri} />
        </div>
      </div>
    </div>
  );
};
