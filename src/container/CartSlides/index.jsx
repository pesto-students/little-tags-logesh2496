import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductImage from "../../components/ProductImage";
import Quantity from "../../components/Quantity";

import "./cart-slides.scss";
import Loading from "../../components/Loading";
const productUrl = "https://fakestoreapi.com/products";
const CartSlides = ({ id, quantity, onProductRemove }) => {
  const [noOfQuantity, setNoOfQuantity] = useState(quantity);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const onIncrement = () => {
    setNoOfQuantity(noOfQuantity + 1);
  };

  const onDecrement = () => {
    const newQuantity = noOfQuantity - 1;
    if (newQuantity) {
      setNoOfQuantity(noOfQuantity - 1);
    } else {
      //TODO confirm before emptying the cart;
      onProductRemove(id);
    }
  };

  useEffect(() => {
    fetch(`${productUrl}/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setProduct(result);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error({ err });
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="cart-slides">
      <div className="img-wrapper">
        <ProductImage url={product?.image} />
      </div>
      <div className="product-info">
        <div className="title">{product?.title}</div>
        <Quantity
          noOfQuantity={noOfQuantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
      <div className="price">
        ₹ {(product?.price * noOfQuantity).toFixed(2)}
      </div>
    </div>
  );
};
CartSlides.propTypes = {
  id: PropTypes.string.isRequired,
  onProductRemove: PropTypes.func.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default CartSlides;
