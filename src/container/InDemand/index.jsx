import React from "react";
import Suggestion from "../../components/Suggestion";
import "./in-demand.scss";

const InDemand = () => {
  return (
    <div>
      <div>Most in Demand</div>
      <div className="in-demand" style={{ display: "flex" }}>
        <div>
          <Suggestion
            url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            label="T Shirt"
          />
          <Suggestion
            url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            label="T Shirt"
          />
        </div>
        <div style={{ height: "200px" }}>
          <Suggestion
            url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            label="T Shirt"
          />
        </div>
        <div>
          <Suggestion
            url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            label="T Shirt"
          />
        </div>
      </div>
    </div>
  );
};
export default InDemand;
