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
  onAddressSelection,
  isSelected,
}) => {
  return (
    <div className="address" onClick={onAddressSelection}>
      <div className={"selectable" + (isSelected ? " selected" : "")}></div>
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
  onAddressSelection: PropTypes.func.isRequired,
  state: PropTypes.string,
  mobileNo: PropTypes.number,
  isSelected: PropTypes.bool.isRequired,
};

export default Address;
