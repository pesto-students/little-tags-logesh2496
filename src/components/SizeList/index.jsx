import React from "react";
import "./size-list.scss";

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
export default SizeList;
