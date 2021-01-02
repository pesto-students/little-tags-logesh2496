import React from "react";
import PastOrderSlide from "../../components/PastOrderSlide";
import UseRouterClass from "../../hooks/useRouterClass";
import "./past-orders.scss";

const pastOrders = [
  {
    name: "Faux Leather Jacket",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    date: "2 September 2020",
    quantity: 1,
    price: 1200,
    id: 16,
  },
  {
    name: "External HDD",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    date: "2 September 2020",
    quantity: 1,
    price: 400,
    id: 2,
  },
];

const PastOrders = () => {
  UseRouterClass();
  return (
    <div className="past-orders">
      <div className="title">Your Orders</div>
      {pastOrders.map((pastOrder) => (
        <PastOrderSlide {...pastOrder} />
      ))}
    </div>
  );
};

export default PastOrders;
