import React from "react";
import ProductImage from "../ProductImage";
import "./carousel.scss";
import PropTypes from "prop-types";

const Carousel = ({ url }) => {
  return (
    <div className="carousel">
      &lt;
      <ProductImage url={url} />
      &gt;
    </div>
  );
};

Carousel.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Carousel;
