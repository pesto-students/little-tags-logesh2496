import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import UseRouterClass from "../../hooks/useRouterClass";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import Header from "../Header";
import ProductSlide from "../ProductSlide";
import "./product-list.scss";

const getCategoryFromQuery = (searchQuery) => {
  if (
    searchQuery.toLowerCase().includes("shirt") ||
    searchQuery.toLowerCase().includes("jacket") ||
    searchQuery.toLowerCase().includes("top")
  ) {
    return "men clothing";
  } else if (
    searchQuery.toLowerCase().includes("jean") ||
    searchQuery.toLowerCase().includes("pant")
  ) {
    return "men clothing";
  } else if (searchQuery.toLowerCase().includes("necklace")) {
    return "jewelery";
  } else {
    return "electronics";
  }
};

const ProductList = () => {
  const { searchQuery } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  UseRouterClass();

  useEffect(() => {
    setIsLoading(true);
    document.firstElementChild.scrollTop = 0;
    const category = getCategoryFromQuery(searchQuery);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  useScrollIntoView([products]);

  return (
    <div className="list-wrapper">
      <div className="product-list">
        {isLoading ? (
          <div className="loading">Loading... </div>
        ) : (
          <>
            <div className="list-header">{searchQuery}</div>
            <div className="product-detail">
              {products.map((product) => (
                <ProductSlide product={product} key={product.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ProductList;
