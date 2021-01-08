import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { emptyCart, updatePastOrders } from "../../actions";
import Button from "../../components/Button";
import PaymentMode from "../../components/PaymentMode";
import ThankYouNote from "../../components/ThankYouNote";
import DeliverTo from "../DeliverTo";
import "./payment.scss";

const Payment = () => {
  const userCart = useSelector((state) => state.cart);
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
    const forPastOrders = userCart.map((cart) => {
      const date = new Date(2010, 7, 5);
      const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        date
      );
      const month = new Intl.DateTimeFormat("en", { month: "long" }).format(
        date
      );
      const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
        date
      );
      return { ...cart, date: `${day} ${month}, ${year}` };
    });
    dispatch(updatePastOrders(forPastOrders));
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
