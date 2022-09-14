import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";

const ItemDetail = ({ data }) => {
  const [cantidad, setCantidad] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addProduct(data, cantidad);
  };
  return (
    <div className="contenedor">
      <div className="detalle">
        <img className="imagenDetalle" src={data.imagen} alt="Imagen Detalle" />
        <div className="contenido">
          <h2>{data.nombre}</h2>
          <h4>{data.precio}</h4>
          {cantidad ? (
            <div className="links">
              <Link to="/">Continuar Comprando</Link>
              <Link to="/cart">Terminar Compra</Link>
            </div>
          ) : (
            <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
