import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { openLogin } from "../../actions";
import Carousel from "../Carousel";
import Quantity from "../../components/Quantity";
import SizeList from "../../components/SizeList";
import Suggestions from "../../components/Suggestions";
import UseRouterClass from "../../hooks/useRouterClass";
import "./product-details.scss";
import useScrollIntoView from "../../hooks/useScrollIntoView";

const productUrl = "https://fakestoreapi.com/products";
const ProductDetails = () => {
  const { isUserLoggedIn } = useSelector((state) => state);
  const { searchQuery, productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const [noOfQuantity, setNoOfQuantity] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  const onIncrement = () => {
    setNoOfQuantity(noOfQuantity + 1);
  };
  const onDecrement = () => {
    setNoOfQuantity(noOfQuantity - 1);
  };
  const onSizeSelection = (selectedSize) => {
    setSize(selectedSize);
  };
  const onAddToCart = () => {
    if (!isUserLoggedIn) {
      dispatch(openLogin(true));
    } else {
      history.push("/home/address");
    }
  };

  const onSuggestionClick = (id) => {
    history.push(`/home/product/${id}`);
  };

  UseRouterClass();

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
      })
      .finally(() => {
        setShowSuggestions(true);
      });
  }, [productId]);

  useScrollIntoView([product]);

  let content;

  if (!product && !isLoading) {
    content = (
      <div className="product-details">Looking for an invalid item.</div>
    );
  } else if (isLoading) {
    content = <div className="product-details">Loading...</div>;
  } else {
    content = (
      <div className="product-details">
        <div className="carousel-wrapper">
          <Carousel url={product.image} />
        </div>
        <div className="product-info">
          <header>{product.title}</header>
          <div className="price">₹ {product.price}</div>
          <div className="description">{product.description}</div>
          <div className="size">Size</div>
          <SizeList onSizeSelection={onSizeSelection} />
          <div className="quantity">Quantity</div>
          <Quantity
            noOfQuantity={noOfQuantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          <div className="cart" onClick={onAddToCart}>
            Add to Cart
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-wrapper">
      {content}
      {showSuggestions && <Suggestions onSuggestionClick={onSuggestionClick} />}
    </div>
  );
};
export default ProductDetails;
