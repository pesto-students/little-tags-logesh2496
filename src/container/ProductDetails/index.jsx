import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Header from "../Header";
import "./product-details.scss";

const productUrl = "https://fakestoreapi.com/products";
const ProductDetails = () => {
  const { searchQuery, productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`${productUrl}/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setProduct(result);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error({ err });
      });
  }, []);
  if (!product && !isLoading) {
    return <div>Looking for an invalid item.</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product-details">
      <Header />
      <div className="carousel-wrapper">
        <Carousel url={product.image} />
      </div>
      <div className="product-info">
        <header>{product.title}</header>
        <div className="price">$ {product.price}</div>
        <div className="description">{product.description}</div>
        <div className="size">Size</div>
        <div className="size-list">XS S M L XL XXL</div>
        <div className="quantity">Quantity</div>
        <div className="cart">Add to Cart</div>
      </div>
      <div></div>
    </div>
  );
};
export default ProductDetails;
