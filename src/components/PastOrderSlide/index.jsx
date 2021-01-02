import React from "react";
import Button from "../Button";
import ProductImage from "../ProductImage";
import "./past-order-slide.scss";
import PropTypes from "prop-types";

const PastOrderSlide = ({ name, image, price, date, quantity }) => {
  return (
    <div className="past-order-slide">
      <div className="image">
        <ProductImage url={image} />
      </div>
      <div className="info">
        <strong>{name}</strong>
        <div className="price">₹ {price}</div>
        <div className="date">{date}</div>
      </div>
      <div className="order-btn">
        <Button>Order Again</Button>
      </div>
    </div>
  );
};
PastOrderSlide.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  date: PropTypes.string,
  quantity: PropTypes.number,
};

export default PastOrderSlide;
