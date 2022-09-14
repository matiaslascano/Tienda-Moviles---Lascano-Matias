import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrecio, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="cartNoItemText">
          <p>No hay elementos en el carrito</p>
        </div>
        <div className="cartNoItemLink">
          <Link to="/">Continuar comprando</Link>
        </div>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <button className="vaciarCarrito" onClick={clearCart}>
        Vaciar Carrito
      </button>
      <p className="precioTotal">Total: ${totalPrecio()}</p>
    </>
  );
};

export default Cart;
