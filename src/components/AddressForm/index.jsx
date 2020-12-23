import React from "react";
import Button from "../Button";
import "./address-form.scss";
import PropTypes from "prop-types";

const AddressForm = ({ handleAddInformation }) => {
  return (
    <div className="address-form">
      <form>
        <section>
          <div className="row">
            <div className="column">
              <label>First Name</label>
              <input></input>
            </div>
            <div className="column">
              <label>Address line 1</label>
              <input></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Last Name</label>
              <input></input>
            </div>
            <div className="column">
              <label>Address line 2</label>
              <input></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Email ID</label>
              <input></input>
            </div>
            <div className="column">
              <label>State</label>
              <input></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Phone Number</label>
              <input></input>
            </div>
            <div className="column">
              <label>Pin Code</label>
              <input></input>
            </div>
          </div>
        </section>
        <div className="submit-area">
          <Button className="submit-address" onClick={handleAddInformation}>
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
