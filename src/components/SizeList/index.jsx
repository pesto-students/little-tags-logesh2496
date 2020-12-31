import React from "react";
import "./size-list.scss";
import PropTypes from "prop-types";

const SizeList = ({ onSizeSelection }) => {
  return (
    <div className="size-list">
      <div onClick={onSizeSelection}>XS</div>
      <div onClick={onSizeSelection}>S</div>
      <div onClick={onSizeSelection}>M</div>
      <div onClick={onSizeSelection}>L</div>
      <div onClick={onSizeSelection}>XL</div>
    </div>
  );
};

SizeList.propTypes = {
  onSizeSelection: PropTypes.func.isRequired,
};
export default SizeList;
