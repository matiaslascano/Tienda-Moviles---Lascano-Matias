import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import CartProvider from "./CartContext";

const itemList = "LISTA DE PRODUCTOS";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartWidget />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
