"use client";

import { FormEvent, Fragment, useState } from "react";

import { Input } from "@/components/base";
import { CustomSelect } from "@/components/template";
import { cities, countries, regions } from "@/data/country";

const BillingDetails = () => {
  const [isNewAddress, setIsNewAddress] = useState<boolean>(false);

  const handleAddressChange = (e: FormEvent<HTMLInputElement>) => {
    setIsNewAddress(e.currentTarget.checked);
  };

  const NewAddressForm = () => {
    const handleCityChange = (value: string) => {
      console.log("Selected city:", value);
    };

    return (
      <div className="input-box-form">
        <form method="post">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="input-item">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="input-item">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="input-item">
                <label>Phone</label>
                <input type="text" name="phone" placeholder="Phone" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="input-item">
                <label>Post Code *</label>
                <input type="text" name="postCode" placeholder="Post Code" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="input-item">
                <label>City *</label>
                <CustomSelect options={cities} onChange={handleCityChange} />
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="input-item">
                <label>Country *</label>
                <CustomSelect options={countries} onChange={handleCityChange} />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="input-item">
                <label>Region State *</label>
                <CustomSelect options={regions} onChange={handleCityChange} />
              </div>
            </div>
            <div className="col-12">
              <div className="input-item">
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address Line 1"
                />
              </div>
            </div>
            {/* <div className="col-12">
              <div className="input-button">
                <button type="submit" className="bb-btn-2">
                  Continue
                </button>
              </div>
            </div> */}
          </div>
        </form>
      </div>
    );
  };

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
      <div className="checkout-radio">
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
          <label htmlFor="newAddress">Register a new Address</label>
        </div>
      </div>
      {!isNewAddress && (
        <Fragment>
          <p>
            số 26, ngõ 63 Xuân Thuỷ, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội
            0339410975
          </p>
        </Fragment>
      )}
      {isNewAddress && <NewAddressForm />}
    </div>
  );
};

export default BillingDetails;
