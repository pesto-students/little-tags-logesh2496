import React from "react";
import Button from "../Button";
import "./address-form.scss";
import PropTypes from "prop-types";

const AddressForm = ({ handleAddInformation }) => {
  const formSubmit = (e) => {
    const form = e.target.closest("form");
    if (form.checkValidity()) {
      e.preventDefault();
      const formValues = form.elements;
      const formObj = {
        firstName: formValues["fName"].value,
        LastName: formValues["lName"].value,
        name: `${formValues["fName"].value} ${formValues["lName"].value}`,
        addressLineOne: formValues["addressOne"].value,
        addressLineTwo: formValues["addressTwo"].value,
        state: formValues["state"].value,
        address: `${formValues["addressOne"].value} ${
          formValues["addressTwo"].value
        } ${formValues["state"].value || ""} ${formValues["pincode"].value}`,
        email: formValues["emailId"].value,
        mobileNo: formValues["mobileNo"].value,
        pincode: formValues["pincode"].value,
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
              <input name="fName" required></input>
            </div>
            <div className="column">
              <label>Address line 1</label>
              <input name="addressOne" required></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Last Name</label>
              <input name="lName"></input>
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
