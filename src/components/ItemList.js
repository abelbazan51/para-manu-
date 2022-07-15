import React from "react";
import Item from "./item";

const ItemList = ({ items = [] }) => {
  return items.map((item) => <Item key={Item.Id} products={Item} />);
};

export default ItemList;
