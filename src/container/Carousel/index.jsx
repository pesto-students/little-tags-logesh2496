import React, { useEffect, useState } from "react";
import ProductImage from "../../components/ProductImage";
import "./carousel.scss";
import PropTypes from "prop-types";

const categories = [
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
];

const Carousel = ({ url }) => {
  const [position, setPosition] = useState(0);
  const urls = [url, ...categories];

  const onRightClick = () => {
    setPosition((position + 1) % urls.length);
  };

  const onLeftClick = () => {
    setPosition((((position - 1) % urls.length) + urls.length) % urls.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      onRightClick();
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [position]);

  return (
    <div className="carousel">
      <img src="/icons/arrow_left.svg" alt="left" onClick={onLeftClick} />
      <ProductImage url={urls[position]} />
      <img src="/icons/arrow_right.svg" alt="right" onClick={onRightClick} />
    </div>
  );
};

Carousel.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Carousel;
