import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFromCart } from "../../actions";
import Button from "../../components/Button";
import useRouterClass from "../../hooks/useRouterClass";
import CartSlides from "../CartSlides";
import "./cart.scss";

const Cart = () => {
  const userCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const onProductRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  useRouterClass();

  const onCartProceed = () => {
    history.push("/home/address");
  };

  return (
    <div className="cart-wrapper">
      {!userCart.length ? (
        <div className="empty">Your cart is empty :)</div>
      ) : (
        <>
          <header>Your Cart</header>
          {userCart.map((product) => (
            <CartSlides
              key={product.id}
              quantity={product.quantity}
              id={product.id}
              onProductRemove={onProductRemove}
            />
          ))}

          <div className="proceed">
            <Button onClick={onCartProceed}>PROCEED</Button>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
