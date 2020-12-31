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

Address.propTypes = {
  fullName: PropTypes.string.isRequired,
  addressOne: PropTypes.string.isRequired,
  addressTwo: PropTypes.string.isRequired,
  pincode: PropTypes.string.isRequired,
  state: PropTypes.string,
  mobileNo: PropTypes.number,
};

export default Address;
