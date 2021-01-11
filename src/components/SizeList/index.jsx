import React from "react";
import "./size-list.scss";
import PropTypes from "prop-types";

const SizeList = ({ onSizeSelection, size }) => {
  return (
    <div className="size-list">
      <div
        className={size == "XS" ? "selected" : ""}
        onClick={onSizeSelection.bind(null, "XS")}
      >
        XS
      </div>
      <div
        className={size == "S" ? "selected" : ""}
        onClick={onSizeSelection.bind(null, "S")}
      >
        S
      </div>
      <div
        className={size == "M" ? "selected" : ""}
        onClick={onSizeSelection.bind(null, "M")}
      >
        M
      </div>
      <div
        className={size == "L" ? "selected" : ""}
        onClick={onSizeSelection.bind(null, "L")}
      >
        L
      </div>
      <div
        className={size == "XL" ? "selected" : ""}
        onClick={onSizeSelection.bind(null, "XL")}
      >
        XL
      </div>
    </div>
  );
};

SizeList.propTypes = {
  onSizeSelection: PropTypes.func.isRequired,
  size: PropTypes.string,
};
export default SizeList;
