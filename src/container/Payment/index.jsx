import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import PaymentMode from "../../components/PaymentMode";
import ThankYouNote from "../../components/ThankYouNote";
import DeliverTo from "../DeliverTo";
import "./payment.scss";

const Payment = () => {
  const [showThanks, setShowThanks] = useState(false);
  const history = useHistory();

  const handleContinue = () => {
    history.push("/");
  };

  return (
    <div className="payment">
      {showThanks ? (
        <ThankYouNote clickOnContinue={handleContinue} />
      ) : (
        <>
          <DeliverTo showOnlySelected />
          <PaymentMode />
          <Button onClick={() => setShowThanks(true)}>
            PROCEED TO PAYMENT
          </Button>
        </>
      )}
    </div>
  );
};

export default Payment;
