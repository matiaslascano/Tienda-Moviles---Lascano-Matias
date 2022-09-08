import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const celulares = [
  {
    id: 1,
    nombre: "Samsung Galaxy S22",
    imagen: "https://m.media-amazon.com/images/I/817aOXLoNpL._AC_SL1500_.jpg",
    precio: "$215.999",
    stock: "5",
    categoria: "alta",
  },
  {
    id: 2,
    nombre: "Iphone 13",
    imagen: "https://m.media-amazon.com/images/I/61D84NtVgVL.jpg",
    precio: "$470.712",
    stock: "0",
    categoria: "alta",
  },
  {
    id: 3,
    nombre: "Motorola Edge 30 Pro",
    imagen:
      "https://armoto.vtexassets.com/arquivos/ids/162452-800-auto?v=637922986159330000&width=800&height=auto&aspect=true",
    precio: "$169.999",
    stock: "22",
    categoria: "media",
  },
];

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(celulares);
      }, 2000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((celulares) => celulares.categoria === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <>
      <ItemList className="listaCelulares" data={data} />
    </>
  );
};

export default ItemListContainer;
