import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";
import "./Cart.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrecio, clearCart } = useCartContext();

  const order = {
    comprador: {
      nombre: "Matias",
      email: "matias_lascano@hotmail.com",
      telefono: "+5493514084026",
      direccion: "Edmundo de Amicis 4010",
    },
    items: cart.map((product) => ({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: product.cantidad,
    })),
    total: totalPrecio(),
  };
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

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
      <button onClick={handleClick}>Emitir Orden de Compra</button>
    </>
  );
};

export default Cart;
