import React from "react";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ data = [] }) => {
  return data.map((celulares) => (
    <Item className="listaCelulares" key={celulares.id} info={celulares} />
  ));
};

export default ItemList;
