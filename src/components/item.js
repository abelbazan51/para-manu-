import React from "react";
import "../data/MOCK_DATA.json";
const Item = ({ product }) => {
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.name} </div>
      <div>{product.id} </div>
    </div>
  );
};

export default Item;
