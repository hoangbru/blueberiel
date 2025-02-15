import Image from "next/image";
import { Fragment } from "react";

const PaymentMethod = () => {
  return (
    <Fragment>
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
            Please select the preferred shipping method to use on this order.
          </span>
          <div className="bb-del-option">
            <div className="inner-del">
              <div className="radio-items">
                <input type="radio" id="cash" name="radio-items" />
                <label htmlFor="cash">Cash On Delivery</label>
              </div>
            </div>
          </div>
          <div className="bb-del-option">
            <div className="inner-del">
              <div className="radio-items">
                <input type="radio" id="card" name="radio-items" />
                <label htmlFor="card">Credit/Debit Card</label>
                <div className="d-flex">
                  <span>
                    <Image
                      src={"/assets/img/payment/visa.png"}
                      alt="visa-card"
                      fill
                    />
                  </span>
                  <span>
                    <Image
                      src={"/assets/img/payment/mastercard.png"}
                      alt="visa-card"
                      fill
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-del-option">
            <div className="inner-del">
              <div className="radio-items">
                <input type="radio" id="momo" name="radio-items" />
                <label htmlFor="momo">Momo Wallet</label>
              </div>
            </div>
          </div>
          <div className="bb-del-option">
            <div className="inner-del">
              <div className="radio-items">
                <input type="radio" id="vnpay" name="radio-items" />
                <label htmlFor="vnpay">VNPAY</label>
              </div>
            </div>
          </div>
          <div className="bb-del-option">
            <div className="inner-del">
              <div className="radio-items">
                <input type="radio" id="zalopay" name="radio-items" />
                <label htmlFor="zalopay">ZaloPay Wallet</label>
              </div>
            </div>
          </div>
        </div>
        <div className="about-order">
          <h5>Add Comments About Your Order</h5>
          <textarea name="your-commemt" placeholder="Comments"></textarea>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentMethod;
