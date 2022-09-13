import React from "react";
import { useCartContext } from "../CartContext";

import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={product.imagen} alt={product.nombre} />
      <div>
        <p>{product.nombre}</p>
        <p>Cantidad: {product.cantidad}</p>
        <p>Precio U.: ${product.precio}</p>
        <p>Subtotal: ${product.cantidad * product.precio}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
