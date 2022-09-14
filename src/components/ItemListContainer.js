import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");

    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <>
      <ItemList className="listaCelulares" data={data} />
    </>
  );
};

export default ItemListContainer;
