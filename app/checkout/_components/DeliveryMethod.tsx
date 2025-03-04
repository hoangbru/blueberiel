"use client";

import { ChangeEvent } from "react";

import { Input } from "@/components/base";

import { formatPrice } from "@/utils/format";
import { useOrder } from "@/context/OrderContext";

const DeliveryMethod = () => {
  const { order, setOrderItem } = useOrder();
  
  const handleRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrderItem("deliveryMethod", event.target.id);
  };

  return (
    <div
      className="checkout-items"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <div className="sub-title">
        <h4>Delivery Method</h4>
      </div>
      <div className="checkout-method">
        <div className="bb-del-option">
          <div className="inner-del">
            <span className="bb-del-head">Standard</span>
            <div className="radio-items">
              <Input
                type="radio"
                id="standard"
                name="rate"
                checked={order.deliveryMethod === "standard"}
                onChange={handleRateChange}
              />
              <label htmlFor="standard">Rate - {formatPrice(0)}</label>
            </div>
          </div>
          <div className="inner-del">
            <span className="bb-del-head">Express</span>
            <div className="radio-items">
              <Input
                type="radio"
                id="express"
                name="rate"
                checked={order.deliveryMethod === "express"}
                onChange={handleRateChange}
              />
              <label htmlFor="express">Rate - {formatPrice(2)}</label>
            </div>
          </div>
        </div>
        <span className="details">
          Please select the preferred shipping method to use on this order.
        </span>
      </div>
    </div>
  );
};

export default DeliveryMethod;
