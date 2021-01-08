import React from "react";
import "./quantity.scss";
import PropTypes from "prop-types";

const Quantity = ({ noOfQuantity, onIncrement, onDecrement, min = 0 }) => {
  return (
    <div className="quantity-cal">
      <div
        onClick={onDecrement}
        className={noOfQuantity === min ? "disabled" : ""}
      >
        -
      </div>
      <div>{noOfQuantity}</div>
      <div onClick={onIncrement}>+</div>
    </div>
  );
};

Quantity.propTypes = {
  noOfQuantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  min: PropTypes.number,
};

export default Quantity;
