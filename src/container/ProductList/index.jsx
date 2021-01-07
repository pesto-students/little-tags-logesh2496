import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Pager from "../../components/Pager";
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

const maxLength = 5;

const ProductList = () => {
  const { searchQuery } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNoOfPages, setTotalNoOfPages] = useState(0);

  const onNextPage = () => {
    if (currentPage === totalNoOfPages) return;
    setPageByNo(currentPage + 1);
  };
  const onPreviousPage = () => {
    if (currentPage === 1) return;
    setPageByNo(currentPage - 1);
  };
  const setPageByNo = (pageNo) => {
    setCurrentPage(pageNo);
    const start = (pageNo - 1) * maxLength;
    const limit = start + maxLength;
    console.log(start, limit);
    setProducts(allProducts.slice(start, limit));
  };

  UseRouterClass();

  useEffect(() => {
    setIsLoading(true);
    document.firstElementChild.scrollTop = 0;
    const category = getCategoryFromQuery(searchQuery);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((result) => {
        const totalResult = [...result, ...result, ...result, ...result];
        setTotalNoOfPages(Math.round(totalResult.length / maxLength));
        setAllProducts(totalResult);
        setProducts(totalResult.slice(0, maxLength));
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  useScrollIntoView([products]);

  return (
    <div className="list-wrapper">
      <div className="product-list">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="list-header">{searchQuery}</div>
            <div className="product-detail">
              {products.map((product, i) => (
                <ProductSlide product={product} key={i} />
              ))}
            </div>
            <Pager
              onNextPage={onNextPage}
              onPreviousPage={onPreviousPage}
              currentPage={currentPage}
              totalNoOfPages={totalNoOfPages}
              setPageByNo={setPageByNo}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default ProductList;
