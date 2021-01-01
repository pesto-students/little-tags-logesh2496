import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Suggestions from "../../components/Suggestions";
import UseRouterClass from "../../hooks/useRouterClass";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import Header from "../Header";
import ProductSlide from "../ProductSlide";
import "./product-list.scss";

const getCategoryFromQuery = (searchQuery) => {
  if (searchQuery.includes("Shirt")) {
    return "men clothing";
  } else if (searchQuery.includes("Jean")) {
    return "men clothing";
  } else if (searchQuery.includes("Necklace")) {
    return "jewelery";
  } else {
    return "electronics";
  }
};

const ProductList = () => {
  const { searchQuery } = useParams();
  const [products, setProducts] = useState([]);

  UseRouterClass();

  useEffect(() => {
    document.firstElementChild.scrollTop = 0;
    const category = getCategoryFromQuery(searchQuery);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => console.error(err));
  }, []);

  useScrollIntoView([products]);

  return (
    <div className="list-wrapper">
      <div className="product-list">
        <div className="list-header">{searchQuery}</div>
        <div className="product-detail">
          {products.map((product) => (
            <ProductSlide product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
