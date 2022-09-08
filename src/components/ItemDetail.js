import React, { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [enviarCarrito, setEnviarCarrito] = useState(false);
  const onAdd = (cantidad) => {
    setEnviarCarrito(true);
  };
  return (
    <div className="contenedor">
      <div className="detalle">
        <img className="imagenDetalle" src={data.imagen} alt="Imagen Detalle" />
        <div className="contenido">
          <h2>{data.nombre}</h2>
          <h4>{data.precio}</h4>
          {enviarCarrito ? (
            <Link to="/cart">Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={4} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
