import React from "react";
import PropTypes from "prop-types";
import "./product.scss";

const ProductImage = ({ url }) => {
  return (
    <div className="product-img">
      <div className="overlay"></div>
      <img src={url} alt="url" />
    </div>
  );
};
ProductImage.propTypes = {
  url: PropTypes.string,
};

export default ProductImage;
