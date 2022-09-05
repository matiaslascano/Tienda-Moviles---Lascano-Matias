import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link to={`/item/${info.id}`} className="itemCelulares">
      <img src={info.imagen} alt={info.nombre} />
      <p>MODELO: {info.nombre}</p>
      <p>PRECIO: {info.precio}</p>
      <p>STOCK: {info.stock}</p>
    </Link>
  );
};

export default Item;
