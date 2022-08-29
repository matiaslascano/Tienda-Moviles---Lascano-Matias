import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const celular = {
  id: 1,
  nombre: "Samsung Galaxy S22",
  imagen: "https://m.media-amazon.com/images/I/817aOXLoNpL._AC_SL1500_.jpg",
  precio: "$150.000",
  stock: "5",
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(celular);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
