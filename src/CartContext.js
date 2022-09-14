import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, cantidad: product.cantidad + cantidad }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };
  console.log("Carrito", cart);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  };
  const totalProductos = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrecio,
        totalProductos,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
