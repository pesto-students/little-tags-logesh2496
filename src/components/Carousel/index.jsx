import React from "react";
import ProductImage from "../ProductImage";
import "./carousel.scss";

const Carousel = ({ url }) => {
  return (
    <div className="carousel">
      &lt;
      <ProductImage url={url} />
      &gt;
    </div>
  );
};
export default Carousel;
