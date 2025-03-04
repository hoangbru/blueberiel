"use client";

import { ChangeEvent } from "react";
import Image from "next/image";

import { Input, Textarea } from "@/components/base";

import { useOrder } from "@/context/OrderContext";
import { debounce } from "@/utils/debounce";

const PaymentMethod = () => {
  const { order, setOrderItem } = useOrder();

  const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrderItem("paymentMethod", event.target.id);
  };

  const handleCommentChange = debounce((value: string) => {
    setOrderItem("orderComment", value);
  }, 500);

  return (
    <div
      className="checkout-items"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="600"
    >
      <div className="sub-title">
        <h4>Payment Method</h4>
      </div>
      <div className="checkout-method">
        <span className="details">
          Please select the preferred payment method to use on this order.
        </span>
        <div className="bb-del-option">
          <div className="inner-del">
            <div className="radio-items">
              <Input
                type="radio"
                id="cash_on_delivery"
                name="payment"
                checked={order.paymentMethod === "cash_on_delivery"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="cash_on_delivery">Cash On Delivery</label>
            </div>
          </div>
        </div>
        <div className="bb-del-option">
          <div className="inner-del">
            <div className="radio-items">
              <Input
                type="radio"
                id="card"
                name="payment"
                checked={order.paymentMethod === "card"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="card">Credit/Debit Card</label>
              <div className="d-flex">
                <span>
                  <Image
                    src="/assets/img/payment/visa.png"
                    alt="visa-card"
                    width={40}
                    height={25}
                  />
                </span>
                <span>
                  <Image
                    src="/assets/img/payment/mastercard.png"
                    alt="mastercard"
                    width={40}
                    height={25}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* others payment method: momo, vnpay, zalopay */}
        {/* <div className="bb-del-option">
          <div className="inner-del">
            <div className="radio-items">
              <Input
                type="radio"
                id="momo"
                name="payment"
                checked={order.paymentMethod === "momo"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="momo">Momo Wallet</label>
            </div>
          </div>
        </div>
        <div className="bb-del-option">
          <div className="inner-del">
            <div className="radio-items">
              <Input
                type="radio"
                id="vnpay"
                name="payment"
                checked={order.paymentMethod === "vnpay"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="vnpay">VNPAY</label>
            </div>
          </div>
        </div>
        <div className="bb-del-option">
          <div className="inner-del">
            <div className="radio-items">
              <Input
                type="radio"
                id="zalopay"
                name="payment"
                checked={order.paymentMethod === "zalopay"}
                onChange={handlePaymentChange}
              />
              <label htmlFor="zalopay">ZaloPay Wallet</label>
            </div>
          </div>
        </div> */}
      </div>
      <div className="about-order">
        <h5>Add Comments About Your Order</h5>
        <Textarea
          id="order-comment"
          name="order-comment"
          placeholder="Comments"
          onChange={(e) => handleCommentChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
