import React, { useState } from "react";
import Address from "../../components/Address";
import AddressForm from "../../components/AddressForm";
import Button from "../../components/Button";
import "./deliver-to.scss";

const DeliverTo = (params) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddAddressBtn = () => {
    setShowForm(true);
  };
  const handleAddInformation = (formObj) => {
    console.log({ formObj });
  };
  const userAddresses = [
    {
      name: "Logesh",
      address: "1418 Riverwood Cottonwood, DL 110092, India",
      mobileNo: 9876543210,
    },
  ];
  return (
    <div className="deliver-to-container">
      <div className="header">Deliver To</div>
      {showForm ? (
        <AddressForm handleAddInformation={handleAddInformation} />
      ) : (
        <>
          <div className="address-containter">
            {userAddresses.map((userAddress) => (
              <Address {...userAddress} />
            ))}
          </div>
          <div className="add-new-address" onClick={handleAddAddressBtn}>
            + ADD NEW ADDRESS
          </div>
          <Button>PROCEED</Button>
        </>
      )}
    </div>
  );
};
export default DeliverTo;
