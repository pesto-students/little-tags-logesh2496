import React from "react";
import "./address.scss";
import PropTypes from "prop-types";

const Address = ({
  fullName,
  addressOne,
  addressTwo,
  state,
  pincode,
  mobileNo,
}) => {
  return (
    <div className="address">
      <div className="selectable"></div>
      <strong>{fullName}</strong>
      <div>{addressOne}</div>
      <div>{addressTwo}</div>
      {state && <div>{state}</div>}
      <div>{pincode}</div>
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
