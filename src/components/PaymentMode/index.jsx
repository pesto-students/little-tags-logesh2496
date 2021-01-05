import React from "react";
import "./payment-mode.scss";
import PropTypes from "prop-types";

const PaymentMode = ({ mode, onPaymentChange }) => {
  return (
    <div className="payment-mode-wrapper">
      <header>Method of payment</header>
      <div className="payment-mode">
        <div className="pay-item">
          <input
            type="radio"
            checked={mode === 0}
            onClick={onPaymentChange.bind(null, 0)}
            id="razor"
          />
          <label htmlFor="razor">Razor Pay</label>
        </div>
        <div className="pay-item">
          <input
            type="radio"
            checked={mode === 1}
            onClick={onPaymentChange.bind(null, 1)}
            id="visa"
          />
          <label htmlFor="visa">Visa / Mastercard / UPI</label>
        </div>
        <div className="pay-item">
          <input
            type="radio"
            checked={mode === 2}
            onClick={onPaymentChange.bind(null, 2)}
            id="pay-pal"
          />
          <label htmlFor="pay-pal">Pay Pal</label>
        </div>
      </div>
    </div>
  );
};
PaymentMode.propTypes = {
  mode: PropTypes.number.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
};

export default PaymentMode;
