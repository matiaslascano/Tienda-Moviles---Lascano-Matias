import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const celulares = [
  {
    id: 1,
    nombre: "Samsung Galaxy S22",
    imagen: "https://m.media-amazon.com/images/I/817aOXLoNpL._AC_SL1500_.jpg",
    precio: "$150.000",
    stock: "5",
  },
  {
    id: 2,
    nombre: "Iphone 13",
    imagen: "https://m.media-amazon.com/images/I/61D84NtVgVL.jpg",
    precio: "$250.000",
    stock: "0",
  },
  {
    id: 3,
    nombre: "Motorola Edge 30 Pro",
    imagen:
      "https://armoto.vtexassets.com/arquivos/ids/162452-800-auto?v=637922986159330000&width=800&height=auto&aspect=true",
    precio: "$140.000",
    stock: "22",
  },
];

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(celulares);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades.`);
  };
  return (
    <>
      <ItemList data={data} />
      <ItemCount initial={1} stock={4} onAdd={onAdd} />
    </>
  );
};

/* const style = {
  color: "blue",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
}; */

export default ItemListContainer;
