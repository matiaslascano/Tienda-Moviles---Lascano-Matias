import React, { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [cantidad, setEnviarCarrito] = useState(false);
  const onAdd = (cantidad) => {
    setEnviarCarrito(cantidad);
  };
  return (
    <div className="contenedor">
      <div className="detalle">
        <img className="imagenDetalle" src={data.imagen} alt="Imagen Detalle" />
        <div className="contenido">
          <h2>{data.nombre}</h2>
          <h4>{data.precio}</h4>
          {cantidad === 0 ? (
            <Link to="/cart">Terminar Compra</Link>
          ) : (
            <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
