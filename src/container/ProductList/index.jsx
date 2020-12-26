import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "./product-list.scss";

const ProductList = () => {
  const { searchQuery } = useParams();

  return (
    <div>
      <Header />
      <div className="product-list"></div>
      {searchQuery}
    </div>
  );
};
export default ProductList;
