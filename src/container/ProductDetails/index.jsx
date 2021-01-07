import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, openLogin } from "../../actions";
import Carousel from "../Carousel";
import Quantity from "../../components/Quantity";
import SizeList from "../../components/SizeList";
import Suggestions from "../Suggestions";
import UseRouterClass from "../../hooks/useRouterClass";
import "./product-details.scss";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import Loading from "../../components/Loading";

const productUrl = "https://fakestoreapi.com/products";
const ProductDetails = () => {
  const { isUserLoggedIn, cart } = useSelector((state) => state);
  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("M");
  const [noOfQuantity, setNoOfQuantity] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const onIncrement = () => {
    setNoOfQuantity(noOfQuantity + 1);
  };
  const onDecrement = () => {
    const newQuantity = noOfQuantity;
    debugger;
    if (newQuantity) {
      setNoOfQuantity(noOfQuantity - 1);
    } else {
      setNoOfQuantity(0);
    }
  };
  const onSizeSelection = (selectedSize) => {
    setSize(selectedSize);
  };
  const onAddToCart = () => {
    if (!isUserLoggedIn) {
      dispatch(openLogin(true));
    } else {
      dispatch(addToCart({ id: product.id, quantity: noOfQuantity }));
    }
  };

  UseRouterClass();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${productUrl}/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setProduct(result);
        const cartQuantity = cart.filter((obj) => obj.id === result.id)[0]
          ?.quantity;
        if (cartQuantity) {
          setNoOfQuantity(cartQuantity);
        }
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
    content = (
      <div className="product-details">
        <Loading />
      </div>
    );
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
          <SizeList size={size} onSizeSelection={onSizeSelection} />
          <div className="quantity">Quantity</div>
          <Quantity
            noOfQuantity={noOfQuantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          <div className="cart" onClick={onAddToCart}>
            <img src="/icons/shopping_cart.svg" alt="" />
            Add to Cart
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-wrapper">
      {content}
      {showSuggestions && <Suggestions />}
    </div>
  );
};
export default ProductDetails;
