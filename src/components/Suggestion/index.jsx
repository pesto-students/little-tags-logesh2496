import React from "react";
import ProductImage from "../ProductImage";
import PropTypes from "prop-types";
import "./suggestion.scss";

const Suggestion = ({ label, url }) => {
  return (
    <div className="suggestion">
      <ProductImage url={url} />
      <div className="suggestion-footer">{label}</div>
    </div>
  );
};
Suggestion.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
};

export default Suggestion;
