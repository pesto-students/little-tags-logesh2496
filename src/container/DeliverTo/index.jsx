import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../actions";
import Address from "../../components/Address";
import AddressForm from "../../components/AddressForm";
import Button from "../../components/Button";
import "./deliver-to.scss";
import useRouterClass from "../../hooks/useRouterClass";
import db from "../../db";
import PropTypes from "prop-types";
import Payment from "../Payment";

const { updateDb } = db;
const DeliverTo = ({ showOnlySelected, location }) => {
  const [showForm, setShowForm] = useState(() => {
    if (location?.state?.showAddAddress) {
      return true;
    } else {
      return false;
    }
  });
  const {
    address,
    id,
    defaultAddress: { fullName: selectedAddressName },
  } = useSelector((state) => state.user);

  const [showPayment, setShowPayment] = useState(false);

  const getUserAddress = () => {
    if (showOnlySelected) {
      return Object.entries(address)
        .map(([, obj]) => obj)
        .filter((obj) => obj.fullName === selectedAddressName);
    } else if (address) {
      return Object.entries(address).map(([, obj]) => obj);
    }
    return [];
  };

  const userAddresses = getUserAddress();

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

  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className="deliver-to-container">
      <div className="header">Deliver To</div>
      {showForm ? (
        <AddressForm handleAddInformation={handleAddInformation} />
      ) : (
        <>
          <div className="address-containter">
            {userAddresses.map((userAddress) => (
              <Address
                {...userAddress}
                onAddressSelection={onAddressSelection.bind(null, userAddress)}
                isSelected={selectedAddressName === userAddress.fullName}
                hideSelectable={showOnlySelected}
              />
            ))}
            {!userAddresses.length &&
              "No Address is available, please add one!"}
          </div>
          {!showOnlySelected && (
            <>
              {" "}
              <div className="add-new-address" onClick={handleAddAddressBtn}>
                + ADD NEW ADDRESS
              </div>
              <Button onClick={() => setShowPayment(true)}>PROCEED</Button>{" "}
            </>
          )}
        </>
      )}
    </div>
  );
};
DeliverTo.propTypes = {
  showOnlySelected: PropTypes.bool,
};

export default DeliverTo;
