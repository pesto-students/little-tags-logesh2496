import React from "react";
import Button from "../Button";
import "./address-form.scss";
import PropTypes from "prop-types";
import { extractFormObj } from "../../helper/utils";

const AddressForm = ({ handleAddInformation }) => {
  const formSubmit = (e) => {
    const form = e.target.closest("form");
    if (form.checkValidity()) {
      e.preventDefault();
      const formValues = form.elements;
      const {
        firstName,
        lastName,
        addressOne,
        addressTwo,
        state,
        pincode,
        emailId,
        mobileNo,
      } = extractFormObj(formValues);

      const formObj = {
        firstName,
        lastName,
        addressOne,
        addressTwo,
        state,
        mobileNo,
        pincode,
        email: emailId,
        fullName: `${firstName} ${lastName}`,
      };
      handleAddInformation(formObj);
    }
  };
  return (
    <div className="address-form">
      <form name="address">
        <section>
          <div className="row">
            <div className="column">
              <label>First Name</label>
              <input name="firstName" required></input>
            </div>
            <div className="column">
              <label>Address line 1</label>
              <input name="addressOne" required></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Last Name</label>
              <input name="lastName"></input>
            </div>
            <div className="column">
              <label>Address line 2</label>
              <input name="addressTwo" required></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Email ID</label>
              <input name="emailId" type="email" required></input>
            </div>
            <div className="column">
              <label>State</label>
              <input name="state"></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Phone Number</label>
              <input name="mobileNo"></input>
            </div>
            <div className="column">
              <label>Pin Code</label>
              <input name="pincode" required></input>
            </div>
          </div>
        </section>
        <div className="submit-area">
          <Button className="submit-address" onClick={formSubmit}>
            ADD INFORMATIONS
          </Button>
        </div>
      </form>
    </div>
  );
};
AddressForm.prototype = {
  handleAddInformation: PropTypes.func.isRequired,
};

export default AddressForm;
