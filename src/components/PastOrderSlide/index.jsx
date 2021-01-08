import React, { useEffect, useState } from "react";
import Button from "../Button";
import ProductImage from "../ProductImage";
import "./past-order-slide.scss";
import PropTypes from "prop-types";
import Loading from "../Loading";

const productUrl = "https://fakestoreapi.com/products";

const PastOrderSlide = ({ id, quantity, date, onOrderAgain }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${productUrl}/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      })
      .catch((err) => {
        console.error({ err });
      });
  }, [id]);

  if (!product) {
    return (
      <div className="past-order-slide">
        <div className="loading">
          <Loading />{" "}
        </div>
      </div>
    );
  }
  return (
    <div className="past-order-slide">
      <div className="image">
        <ProductImage url={product.image} />
      </div>
      <div className="info">
        <strong>{product.name}</strong>
        <div className="price">₹ {(product.price * quantity).toFixed(2)}</div>
        <div className="date">{date}</div>
      </div>
      <div className="order-btn">
        <Button onClick={onOrderAgain.bind(null, id)}>Order Again</Button>
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
