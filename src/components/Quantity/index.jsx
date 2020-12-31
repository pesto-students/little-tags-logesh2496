import React from "react";
import "./quantity.scss";
import PropTypes from "prop-types";

const Quantity = ({ noOfQuantity, onIncrement, onDecrement }) => {
  return (
    <div className="quantity-cal">
      <div onClick={onDecrement}>-</div>
      <div>{noOfQuantity}</div>
      <div onClick={onIncrement}>+</div>
    </div>
  );
};

Quantity.propTypes = {
  noOfQuantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Quantity;
