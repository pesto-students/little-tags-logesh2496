import React from "react";
import "./payment-mode.scss";

const PaymentMode = () => {
  return (
    <div>
      <header>Method of payment</header>
      <div className="payment-mode">
        <div className="pay-item">
          <input type="radio" />
          <label>Razor Pay</label>
        </div>
        <div className="pay-item">
          <input type="radio" />
          <label>Visa / Mastercard / UPI</label>
        </div>
        <div className="pay-item">
          <input type="radio" />
          <label>Pay Pal</label>
        </div>
      </div>
    </div>
  );
};
export default PaymentMode;
