import React from "react";
import { useHistory } from "react-router-dom";
import Suggestion from "../../components/Suggestion";
import "./in-demand.scss";

const InDemand = () => {
  const history = useHistory();
  const onSuggestionClick = (e) => {
    history.push(`/home/${e.target.closest(".suggestion").id}`);
  };
  return (
    <div className="demand-wrapper">
      <div className="header">Most in Demand</div>
      <div className="in-demand">
        <div className="first">
          <Suggestion
            url="/images/tshirts.jpg"
            label="T Shirt"
            id="All Shirts"
            onClick={onSuggestionClick}
          />
          <Suggestion
            url="/images/jeans.jpg"
            label="Jeans"
            id="All Jeans"
            onClick={onSuggestionClick}
          />
        </div>
        <div className="second">
          <Suggestion
            url="/images/bagpack.jpeg"
            label="Backpack"
            id="All Backpacks"
            onClick={onSuggestionClick}
          />
        </div>
        <div className="third">
          <Suggestion
            url="/images/necklace.jpg"
            label="Charm necklace"
            id="All Necklace"
            onClick={onSuggestionClick}
          />
        </div>
      </div>
    </div>
  );
};
export default InDemand;
