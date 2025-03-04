"use client";

import { Fragment } from "react";

import { useProfile } from "@/context/ProfileContext";

const BillingDetails = () => {
  const { profile } = useProfile();

  return (
    <div
      className="bb-checkout-contact"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <div className="main-title">
        <h4>Billing Details</h4>
      </div>
      {/* Option new address */}
      {/* <div className="checkout-radio">
        <div className="radio-items">
          <Input
            type="radio"
            id="existingAddress"
            name="address"
            defaultChecked={!isNewAddress}
            onChange={() => setIsNewAddress(false)}
          />
          <label htmlFor="existingAddress">Use an existing address</label>
        </div>
        <div className="radio-items">
          <Input
            type="radio"
            id="newAddress"
            name="address"
            checked={isNewAddress}
            onChange={handleAddressChange}
          />
          <label htmlFor="newAddress">Register a new address</label>
        </div>
      </div> */}
      <Fragment>
        <p>{profile?.fullName || "N/A"}</p>
        <p>{profile?.phone || "N/A"}</p>
        <p>{profile?.address || "N/A"}</p>
      </Fragment>
    </div>
  );
};

export default BillingDetails;
