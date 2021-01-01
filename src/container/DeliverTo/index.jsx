import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../actions";
import Address from "../../components/Address";
import AddressForm from "../../components/AddressForm";
import Button from "../../components/Button";
import "./deliver-to.scss";
import useRouterClass from "../../hooks/useRouterClass";
import db from "../../db";

const { updateDb } = db;
const DeliverTo = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    address,
    id,
    defaultAddress: { fullName: selectedAddressName },
  } = useSelector((state) => state.user);
  const userAddresses = address
    ? Object.entries(address).map(([, obj]) => obj)
    : [];

  const dispatch = useDispatch();

  const onAddressSelection = ({ fullName }) => {
    updateDb(id, {
      prop: `defaultAddress`,
      value: { fullName },
    });
  };
  const handleAddAddressBtn = () => {
    setShowForm(true);
  };

  const handleAddInformation = (formObj) => {
    dispatch(setAddress(formObj));
  };
  useRouterClass();

  return (
    <div className="deliver-to-container">
      <div className="header">Deliver To</div>
      {showForm ? (
        <AddressForm handleAddInformation={handleAddInformation} />
      ) : (
        <>
          <div className="address-containter">
            {userAddresses.length > 0
              ? userAddresses.map((userAddress) => (
                  <Address
                    {...userAddress}
                    onAddressSelection={onAddressSelection.bind(
                      null,
                      userAddress
                    )}
                    isSelected={selectedAddressName === userAddress.fullName}
                  />
                ))
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
