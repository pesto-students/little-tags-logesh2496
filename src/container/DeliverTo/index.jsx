import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../actions";
import Address from "../../components/Address";
import AddressForm from "../../components/AddressForm";
import Button from "../../components/Button";
import "./deliver-to.scss";

const DeliverTo = () => {
  const [showForm, setShowForm] = useState(false);
  const { address } = useSelector((state) => state.user);
  const userAddresses = address
    ? Object.entries(address).map(([, obj]) => obj)
    : [];
  const dispatch = useDispatch();

  const handleAddAddressBtn = () => {
    setShowForm(true);
  };

  const handleAddInformation = (formObj) => {
    dispatch(setAddress(formObj));
  };

  return (
    <div className="deliver-to-container">
      <div className="header">Deliver To</div>
      {showForm ? (
        <AddressForm handleAddInformation={handleAddInformation} />
      ) : (
        <>
          <div className="address-containter">
            {userAddresses.length > 0
              ? userAddresses.map((userAddress) => <Address {...userAddress} />)
              : "No Address is available, please add one!"}
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
