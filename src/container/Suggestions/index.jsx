import React from "react";
import Suggestion from "../../components/Suggestion";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./suggestions.scss";

const categories = [
  {
    name: "Adidas Jacket",
    url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    id: 3,
  },
  {
    name: "Pierced Owl Ring",
    url: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    id: 8,
  },
  {
    name: "Denim Bag",
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    id: 1,
  },
  {
    name: "Red Bn Cap",
    url: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    id: 19,
  },
];

const Suggestions = () => {
  //TODO dummy data will be removed
  const history = useHistory();

  const onSuggestionClick = (id) => {
    history.push(`/home/product/${id}`);
  };

  return (
    <div className="suggesions-wrapper">
      <span className="suggestion-title">More you'll like</span>
      <div className="suggestions">
        {categories.map(({ name, url, id }) => (
          <Suggestion
            label={name}
            url={url}
            onClick={onSuggestionClick.bind(null, id)}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
