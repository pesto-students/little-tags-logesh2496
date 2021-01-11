import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress, updateDefaultAddress } from "../../actions";
import Address from "../../components/Address";
import AddressForm from "../../components/AddressForm";
import Button from "../../components/Button";
import "./deliver-to.scss";
import useRouterClass from "../../hooks/useRouterClass";
import db from "../../db";
import PropTypes from "prop-types";
import Payment from "../Payment";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import { showAlert } from "../../components/Alert";

const { updateDb } = db;
const DeliverTo = ({ showOnlySelected, location }) => {
  const [showForm, setShowForm] = useState(() => {
    if (location?.state?.showAddAddress) {
      return true;
    } else {
      return false;
    }
  });
  const { address, id, defaultAddress: selectedAddressName } = useSelector(
    (state) => state.user
  );
  const userCart = useSelector((state) => state.cart);
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
    dispatch(updateDefaultAddress(fullName));
    updateDb(id, {
      value: { defaultAddress: fullName },
    });
  };
  const handleAddAddressBtn = () => {
    setShowForm(true);
  };

  const handleAddInformation = (formObj) => {
    dispatch(setAddress(formObj));
    setShowForm(false);
  };
  useRouterClass();
  useScrollIntoView();

  useEffect(() => {}, [showForm]);

  const onProceedClick = () => {
    if (!userAddresses.length) {
      showAlert("Please add an address to continue!");
    } else if (!selectedAddressName) {
      showAlert("Please select a default address to continue!");
    } else if (!userCart?.length) {
      showAlert("Please add items to cart to continue!");
    } else {
      setShowPayment(true);
    }
  };

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
                <span>+</span> ADD NEW ADDRESS
              </div>
              <Button onClick={onProceedClick}>PROCEED</Button>{" "}
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
