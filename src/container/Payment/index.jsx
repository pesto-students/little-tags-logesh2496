import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { emptyCart } from "../../actions";
import Button from "../../components/Button";
import PaymentMode from "../../components/PaymentMode";
import ThankYouNote from "../../components/ThankYouNote";
import DeliverTo from "../DeliverTo";
import "./payment.scss";

const Payment = () => {
  const [showThanks, setShowThanks] = useState(false);
  const [paymentMode, setPaymentMode] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleContinue = () => {
    history.push("/");
  };
  const onPaymentChange = (id) => {
    setPaymentMode(id);
  };
  const paymentProceed = () => {
    setShowThanks(true);
    dispatch(emptyCart());
  };

  return (
    <div className="payment">
      {showThanks ? (
        <ThankYouNote clickOnContinue={handleContinue} />
      ) : (
        <>
          <DeliverTo showOnlySelected />
          <PaymentMode mode={paymentMode} onPaymentChange={onPaymentChange} />
          <Button onClick={paymentProceed}>PROCEED TO PAYMENT</Button>
        </>
      )}
    </div>
  );
};

export default Payment;
