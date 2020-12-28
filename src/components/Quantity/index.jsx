import React, { useState } from "react";
import "./quantity.scss";

const Quantity = ({ noOfQuantity, onIncrement, onDecrement }) => {
  return (
    <div className="quantity-cal">
      <div onClick={onDecrement}>-</div>
      <div>{noOfQuantity}</div>
      <div onClick={onIncrement}>+</div>
    </div>
  );
};
export default Quantity;
