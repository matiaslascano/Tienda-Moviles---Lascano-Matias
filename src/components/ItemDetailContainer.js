import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const celulares = [
  {
    id: 1,
    nombre: "Samsung Galaxy S22",
    imagen: "https://m.media-amazon.com/images/I/817aOXLoNpL._AC_SL1500_.jpg",
    precio: "$150.000",
    stock: "5",
    categoria: "alta",
  },
  {
    id: 2,
    nombre: "Iphone 13",
    imagen: "https://m.media-amazon.com/images/I/61D84NtVgVL.jpg",
    precio: "$250.000",
    stock: "0",
    categoria: "alta",
  },
  {
    id: 3,
    nombre: "Motorola Edge 30 Pro",
    imagen:
      "https://armoto.vtexassets.com/arquivos/ids/162452-800-auto?v=637922986159330000&width=800&height=auto&aspect=true",
    precio: "$140.000",
    stock: "22",
    categoria: "media",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(celulares);
      }, 2000);
    });
    getData.then((res) =>
      setData(res.find((celulares) => celulares.id === parseInt(detalleId)))
    );
  }, [detalleId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
