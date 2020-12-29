import React from "react";
import Suggestion from "../Suggestion";
import PropTypes from "prop-types";
import "./suggestions.scss";

const Suggestions = () => {
  //TODO dummy data will be removed
  const categories = [
    {
      name: "Adidas Jacket",
      url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      name: "Pierced Owl Ring",
      url: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "Denim Bag",
      url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      name: "Red Bn Cap",
      url: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
  ];

  return (
    <div className="suggesions-wrapper">
      <span className="suggestion-title">More you'll like</span>
      <div className="suggestions">
        {categories.map(({ name, url }) => (
          <Suggestion label={name} url={url} />
        ))}
      </div>
    </div>
  );
};
Suggestions.propTypes = {};

export default Suggestions;
