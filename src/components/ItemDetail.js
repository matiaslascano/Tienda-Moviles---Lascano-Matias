import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="contenedor">
      <div className="detalle">
        <img className="imagenDetalle" src={data.imagen} alt="Imagen Detalle" />
        <div className="contenido">
          <h2>{data.nombre}</h2>
          <h4>{data.precio}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
