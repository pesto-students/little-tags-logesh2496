import React from "react";
import Suggestion from "../../components/Suggestion";
import "./in-demand.scss";

const InDemand = () => {
  return (
    <div className="demand-wrapper">
      <div className="header">Most in Demand</div>
      <div className="in-demand">
        <div className="first">
          <Suggestion url="/images/tshirts.jpg" label="T Shirt" />
          <Suggestion url="/images/jeans.jpg" label="Jeans" />
        </div>
        <div className="second">
          <Suggestion url="/images/bagpack.jpeg" label="Backpack" />
        </div>
        <div className="third">
          <Suggestion url="/images/necklace.jpg" label="Charm necklace" />
        </div>
      </div>
    </div>
  );
};
export default InDemand;
