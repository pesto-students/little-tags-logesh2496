import React from "react";
import "./address.scss";
import PropTypes from "prop-types";

const Address = ({ name, address, mobileNo }) => {
  return (
    <div className="address">
      <div className="selectable"></div>
      <strong>{name}</strong>
      <div>{address}</div>
      <div>{mobileNo}</div>
    </div>
  );
};
Address.prototype = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  mobileNo: PropTypes.number,
};
export default Address;
