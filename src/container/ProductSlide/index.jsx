import React from "react";
import ProductImage from "../../components/ProductImage";
import "./product-slide.scss";

const ProductSlide = (props) => {
  const { description, id, image: imageUrl, price, title } = props.product;

  return (
    <div className="product-slide">
      <div className="image">
        <ProductImage url={imageUrl} />
      </div>
      <div className="title">{title}</div>
      <div className="price">{price}</div>
    </div>
  );
};

export default ProductSlide;
