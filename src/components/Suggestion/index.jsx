import React from "react";
import ProductImage from "../ProductImage";
import PropTypes from "prop-types";
import "./suggestion.scss";

const Suggestion = ({ label, url, onClick, id }) => {
  return (
    <div className="suggestion" id={id} onClick={onClick}>
      <ProductImage url={url} />
      <div className="suggestion-footer">{label}</div>
    </div>
  );
};
Suggestion.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default Suggestion;
