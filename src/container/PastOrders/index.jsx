import React from "react";
import PastOrderSlide from "../../components/PastOrderSlide";
import UseRouterClass from "../../hooks/useRouterClass";
import "./past-orders.scss";
import { useSelector } from "react-redux";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import { useHistory } from "react-router-dom";

const PastOrders = () => {
  const pastOrders = useSelector((state) => state.pastOrders);
  const history = useHistory();

  UseRouterClass();
  useScrollIntoView();

  const onOrderAgain = (id) => {
    history.push(`/home/items/${id}`);
  };

  return (
    <div className="past-orders">
      <div className="title">Your Orders</div>
      {pastOrders.map((pastOrder) => (
        <PastOrderSlide
          key={pastOrder.id}
          {...pastOrder}
          onOrderAgain={onOrderAgain}
        />
      ))}
    </div>
  );
};

export default PastOrders;
